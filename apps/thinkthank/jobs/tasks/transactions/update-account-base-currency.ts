import { getAccountBalance, getTransactionAmount } from 'jobs/utils/base-currency'
import { logger, schemaTask } from '@trigger.dev/sdk/v3'

import { prisma } from '@dub/prisma-thinkthank'
import { processBatch } from 'jobs/utils/process-batch'
import { z } from 'zod'

const BATCH_LIMIT = 500

export const updateAccountBaseCurrency = schemaTask({
    id: 'update-account-base-currency',
    schema: z.object({
        bankAccountId: z.string().uuid(),
        currency: z.string(),
        balance: z.number(),
        baseCurrency: z.string()
    }),
    maxDuration: 300,
    queue: {
        concurrencyLimit: 10
    },
    run: async ({ bankAccountId, currency, balance, baseCurrency }) => {
        const exchangeRate = await prisma.exchangeRate.findFirst({
            where: {
                baseCurrency: currency,
                targetCurrency: baseCurrency
            }
        })

        if (!exchangeRate) {
            logger.info('No exchange rate found', {
                currency,
                baseCurrency
            })

            return
        }

        // Update account base balance and base currency
        // based on the new currency exchange rate
        await prisma.bankAccount.update({
            where: { id: bankAccountId },
            data: {
                baseBalance: getAccountBalance({
                    currency: currency,
                    balance,
                    baseCurrency,
                    rate: exchangeRate.rate
                }),
                baseCurrency
            }
        })

        const transactions = await prisma.transaction.findMany({
            where: {
                bankAccountId: bankAccountId
            }
        })

        const formattedTransactions = transactions.map(
            // Exclude fts_vector from the transaction object because it's a generated column
            ({ ...transaction }) => ({
                ...transaction,
                baseAmount: getTransactionAmount({
                    amount: transaction.amount,
                    currency: transaction.currency,
                    baseCurrency,
                    rate: exchangeRate?.rate
                }),
                base_currency: baseCurrency
            })
        )

        await processBatch(formattedTransactions ?? [], BATCH_LIMIT, async (batch) =>
            Promise.all(
                batch.map((transaction) =>
                    prisma.transaction.update({
                        where: { id: transaction.id },
                        data: {
                            baseAmount: transaction.baseAmount,
                            baseCurrency: transaction.base_currency
                        }
                    })
                )
            )
        )
    }
})
