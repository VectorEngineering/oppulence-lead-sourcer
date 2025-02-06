import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import { financialEngineClient as client } from '@/lib/financial-engine-client'
import { prisma } from '@dub/prisma-thinkthank'
import { revalidateCache } from 'jobs/utils/revalidate-cache'
import { z } from 'zod'
import { transactionNotifications } from '../notifications/transactions'
import { syncAccount } from './account'

// Fan-out pattern. We want to trigger a task for each bank account (Transactions, Balance)
export const syncConnection = schemaTask({
    id: 'sync-connection',
    maxDuration: 1000,
    retry: {
        maxAttempts: 2
    },
    schema: z.object({
        connectionId: z.string(),
        manualSync: z.boolean().optional(),
        workspaceId: z.string()
    }),
    run: async ({ connectionId, manualSync }, { ctx }) => {
        try {
            const connection = await prisma.bankConnection.findUnique({
                where: { id: connectionId },
                select: {
                    provider: true,
                    accessToken: true,
                    referenceId: true,
                    projectId: true
                }
            })

            if (!connection) {
                logger.error('Connection not found')
                throw new Error('Connection not found')
            }

            const accountsResponse = await client.accounts.list({
                provider: connection.provider as 'teller' | 'plaid' | 'gocardless',
                id: connection.referenceId ?? undefined,
                accessToken: connection.accessToken ?? undefined
            })

            logger.info('Accounts response', { accountsResponse })

            if (!accountsResponse.data?.length) {
                logger.error('Failed to get accounts')
                throw new Error('Failed to get accounts')
            }

            const isConnected = accountsResponse.data.some((account) => account.institution.provider === connection.provider)

            if (isConnected) {
                await prisma.bankConnection.update({
                    where: { id: connectionId },
                    data: {
                        status: 'connected',
                        lastAccessed: new Date()
                    }
                })

                // Get enabled bank accounts
                const bankAccounts = await prisma.bankAccount.findMany({
                    where: {
                        bankConnectionId: connectionId,
                        enabled: true,
                        manual: false,
                        ...(manualSync
                            ? {}
                            : {
                                  OR: [{ errorRetries: { lt: 4 } }, { errorRetries: null }]
                              })
                    },
                    select: {
                        id: true,
                        accountId: true,
                        type: true,
                        projectId: true,
                        bankConnection: {
                            select: {
                                id: true,
                                provider: true,
                                accessToken: true,
                                status: true
                            }
                        }
                    }
                })

                if (!bankAccounts.length) {
                    logger.info('No bank accounts found')
                    return
                }

                const bankAccountsForSync = bankAccounts.map((account) => ({
                    id: account.id,
                    accountId: account.accountId,
                    accessToken: account.bankConnection?.accessToken ?? undefined,
                    provider: (account.bankConnection?.provider ?? 'plaid') as 'gocardless' | 'plaid' | 'teller',
                    connectionId: account.bankConnection?.id,
                    workspaceId: account.projectId,
                    accountType: account.type ?? 'depository',
                    manualSync
                }))

                // Only run the sync if there are bank accounts enabled
                // We don't want to delay the sync if it's a manual sync
                // but we do want to delay it if it's an background sync to avoid rate limiting
                if (bankAccountsForSync.length > 0) {
                    await syncAccount.batchTrigger(
                        bankAccountsForSync.map((item) => ({
                            payload: item,
                            options: {
                                delay: manualSync ? '0m' : '1m',
                                tags: ctx.run.tags
                            }
                        }))
                    )
                }

                logger.info('Synced bank accounts completed')

                // Trigger a notification for new transactions if it's an background sync
                // We delay it by 1 minutes to allow for more transactions to be notified
                if (!manualSync) {
                    await transactionNotifications.trigger({ workspaceId: connection.projectId }, { delay: '1m' })
                }

                // Check connection status by accounts
                // If all accounts have 3+ error retries, disconnect the connection
                // So the user will get a notification and can reconnect the bank
                try {
                    const accountsWithErrors = await prisma.bankAccount.findMany({
                        where: {
                            bankConnectionId: connectionId,
                            manual: false,
                            enabled: true
                        },
                        select: {
                            id: true,
                            errorRetries: true
                        }
                    })

                    if (accountsWithErrors.length > 0 && accountsWithErrors.every((account) => (account.errorRetries ?? 0) >= 3)) {
                        logger.info('All bank accounts have 3+ error retries, disconnecting connection')

                        await prisma.bankConnection.update({
                            where: { id: connectionId },
                            data: { status: 'disconnected' }
                        })
                    }
                } catch (error) {
                    logger.error('Failed to check connection status by accounts', {
                        error
                    })
                }

                // Revalidate the bank cache (transactions, accounts, connections)
                await revalidateCache({ tag: 'bank', id: connection.projectId })
            } else {
                logger.info('Connection disconnected')

                await prisma.bankConnection.update({
                    where: { id: connectionId },
                    data: { status: 'disconnected' }
                })
            }
        } catch (error) {
            logger.error('Failed to sync connection', { error })

            throw error
        }
    }
})
