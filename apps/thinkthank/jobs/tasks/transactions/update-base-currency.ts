import { prisma } from '@dub/prisma-thinkthank'
import { revalidateCache } from 'jobs/utils/revalidate-cache'
import { schemaTask } from '@trigger.dev/sdk/v3'
import { triggerSequenceAndWait } from 'jobs/utils/trigger-sequence'
import { updateAccountBaseCurrency } from './update-account-base-currency'
import { z } from 'zod'

type AccountPayload = {
    bankAccountId: string
    currency: string
    balance: number
    baseCurrency: string
}

export const updateBaseCurrency = schemaTask({
    id: 'update-base-currency',
    schema: z.object({
        workspaceId: z.string().uuid(),
        baseCurrency: z.string()
    }),
    maxDuration: 300,
    queue: {
        concurrencyLimit: 10
    },
    run: async ({ workspaceId, baseCurrency }) => {
        const accounts = await prisma.bankAccount.findMany({
            where: {
                projectId: workspaceId,
                enabled: true
            }
        })

        if (!accounts) {
            return
        }

        const formattedAccounts = accounts.map((account) => ({
            bankAccountId: account.id,
            currency: account.currency || '',
            balance: account.balance || 0,
            baseCurrency: baseCurrency
        }))

        if (formattedAccounts.length > 0) {
            await triggerSequenceAndWait<AccountPayload>(formattedAccounts, updateAccountBaseCurrency, {
                delayMinutes: 0
            })

            await revalidateCache({ tag: 'bank', id: workspaceId })
        }
    }
})
