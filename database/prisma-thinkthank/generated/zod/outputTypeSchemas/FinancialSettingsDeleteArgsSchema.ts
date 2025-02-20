import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { FinancialSettingsIncludeSchema } from '../inputTypeSchemas/FinancialSettingsIncludeSchema'
import { FinancialSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/FinancialSettingsWhereUniqueInputSchema'
import { UserArgsSchema } from '../outputTypeSchemas/UserArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FinancialSettingsSelectSchema: z.ZodType<Prisma.FinancialSettingsSelect> = z
    .object({
        id: z.boolean().optional(),
        userId: z.boolean().optional(),
        defaultCurrency: z.boolean().optional(),
        enableMultiCurrency: z.boolean().optional(),
        supportedCurrencies: z.boolean().optional(),
        plaidEnabled: z.boolean().optional(),
        gocardlessEnabled: z.boolean().optional(),
        allowManualBankEntry: z.boolean().optional(),
        requireBankVerification: z.boolean().optional(),
        stripeEnabled: z.boolean().optional(),
        stripeCardPaymentsCapability: z.boolean().optional(),
        stripeTransfersCapability: z.boolean().optional(),
        activePaymentProviders: z.boolean().optional(),
        providerConfigs: z.boolean().optional(),
        autoCategorizeTxn: z.boolean().optional(),
        minTxnAmount: z.boolean().optional(),
        maxTxnAmount: z.boolean().optional(),
        notifyLargeTransactions: z.boolean().optional(),
        largeTransactionThreshold: z.boolean().optional(),
        notifyFailedSync: z.boolean().optional(),
        notifyLowBalance: z.boolean().optional(),
        lowBalanceThreshold: z.boolean().optional(),
        autoReconciliation: z.boolean().optional(),
        reconciliationWindow: z.boolean().optional(),
        matchingStrategy: z.boolean().optional(),
        syncFrequency: z.boolean().optional(),
        lastSuccessfulSync: z.boolean().optional(),
        syncStatus: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional()
    })
    .strict()

export const FinancialSettingsDeleteArgsSchema: z.ZodType<Prisma.FinancialSettingsDeleteArgs> = z
    .object({
        select: FinancialSettingsSelectSchema.optional(),
        include: FinancialSettingsIncludeSchema.optional(),
        where: FinancialSettingsWhereUniqueInputSchema
    })
    .strict()

export default FinancialSettingsDeleteArgsSchema
