import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import type { TransactionMethod } from '@prisma/client'
import { prisma } from '@dub/prisma-thinkthank'
import { transformTransaction } from 'jobs/utils/transform'
import { z } from 'zod'

const transactionSchema = z.object({
    id: z.string(),
    description: z.string().nullable(),
    method: z.string().nullable(),
    date: z.string(),
    name: z.string(),
    status: z.enum(['pending', 'posted']),
    balance: z.number().nullable(),
    currency: z.string(),
    amount: z.number(),
    category: z.string().nullable()
})

export const upsertTransactions = schemaTask({
    id: 'upsert-transactions',
    maxDuration: 300,
    queue: {
        concurrencyLimit: 10
    },
    schema: z.object({
        workspaceId: z.string().uuid(),
        bankAccountId: z.string().uuid(),
        manualSync: z.boolean().optional(),
        transactions: z.array(transactionSchema)
    }),
    run: async ({ transactions, workspaceId, bankAccountId, manualSync }) => {
        try {
            // Transform transactions to match our DB schema
            const formattedTransactions = transactions.map((transaction) => {
                const enrichedTransaction = {
                    ...transaction,
                    account_id: bankAccountId,
                    bank_account_id: bankAccountId,
                    currency_rate: 1,
                    currency_source: transaction.currency,
                    internal_id: `${workspaceId}_${transaction.id}`
                }

                return transformTransaction({
                    transaction: enrichedTransaction,
                    workspaceId,
                    bankAccountId,
                    notified: manualSync
                })
            })

            // Upsert transactions, skipping duplicates based on internal_id
            const result = await prisma.transaction.createMany({
                data: formattedTransactions.map((transaction) => ({
                    internalId: transaction.internal_id,
                    name: transaction.name,
                    description: transaction.description,
                    date: new Date(transaction.date),
                    amount: transaction.amount,
                    currency: transaction.currency,
                    method: (transaction.method?.toLowerCase() || 'other') as TransactionMethod,
                    categorySlug: transaction.category_slug,
                    bankAccountId: transaction.bank_account_id,
                    balance: transaction.balance,
                    projectId: workspaceId,
                    status: transaction.status,
                    notified: transaction.notified ?? false
                })),
                skipDuplicates: true
            })

            logger.info('Upserted transactions', {
                count: result.count
            })
        } catch (error) {
            logger.error('Failed to upsert transactions', { error })
            throw error
        }
    }
})
