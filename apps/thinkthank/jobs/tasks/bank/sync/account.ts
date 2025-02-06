import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import { financialEngineClient as client } from '@/lib/financial-engine-client'
import { getClassification } from 'jobs/utils/transform'
import { parseAPIError } from 'jobs/utils/parse-error'
import { prisma } from '@dub/prisma-thinkthank'
import { upsertTransactions } from '../transactions/upsert'
import { z } from 'zod'

const BATCH_SIZE = 500

export const syncAccount = schemaTask({
    id: 'sync-account',
    maxDuration: 300,
    retry: {
        maxAttempts: 2
    },
    schema: z.object({
        id: z.string().uuid(),
        workspaceId: z.string(),
        accountId: z.string(),
        accessToken: z.string().optional(),
        errorRetries: z.number().optional(),
        provider: z.enum(['gocardless', 'plaid', 'teller']),
        manualSync: z.boolean().optional(),
        accountType: z.enum(['credit', 'other_asset', 'other_liability', 'depository', 'loan'])
    }),
    run: async ({ id, workspaceId, accountId, accountType, accessToken, errorRetries, provider, manualSync }) => {
        const classification = getClassification(accountType)

        // Get the balance
        try {
            const balanceResponse = await client.accounts.balance({
                provider,
                id: accountId,
                accessToken
            })

            if (!balanceResponse.data) {
                throw new Error('Failed to get balance')
            }

            const balance = balanceResponse.data.amount ?? undefined

            // Reset error details and retries if we successfully got the balance
            await prisma.bankAccount.update({
                where: { id },
                data: {
                    balance,
                    errorDetails: null,
                    errorRetries: null
                }
            })
        } catch (error) {
            const parsedError = parseAPIError(error)

            logger.error('Failed to sync account balance', { error: parsedError })

            if (parsedError.code === 'disconnected') {
                const retries = errorRetries ? errorRetries + 1 : 1

                // Update the account with the error details and retries
                await prisma.bankAccount.update({
                    where: { id },
                    data: {
                        errorDetails: parsedError.message,
                        errorRetries: retries
                    }
                })

                throw error
            }
        }

        // Get the transactions
        try {
            const transactionsResponse = await client.transactions.list({
                provider,
                accountId,
                accountType: classification === 'credit' ? 'credit' : 'depository',
                accessToken,
                // If the transactions are being synced manually, we want to get all transactions
                latest: manualSync ? 'false' : 'true'
            })

            if (!transactionsResponse) {
                throw new Error('Failed to get transactions')
            }

            // Reset error details and retries if we successfully got the transactions
            await prisma.bankAccount.update({
                where: { id },
                data: {
                    errorDetails: null,
                    errorRetries: null
                }
            })

            if (!transactionsResponse) {
                logger.info(`No transactions to upsert for account ${accountId}`)
                return
            }

            // Upsert transactions in batches of 500
            // This is to avoid memory issues with the DB
            for (let i = 0; i < transactionsResponse.data.length; i += BATCH_SIZE) {
                const transactionBatch = transactionsResponse.data.slice(i, i + BATCH_SIZE)
                await upsertTransactions.trigger({
                    transactions: transactionBatch,
                    workspaceId: workspaceId,
                    bankAccountId: id,
                    manualSync
                })
            }
        } catch (error) {
            logger.error('Failed to sync transactions', { error })

            throw error
        }
    }
})
