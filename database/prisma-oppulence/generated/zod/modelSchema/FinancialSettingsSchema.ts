import { z } from 'zod'
import { Prisma } from '@prisma/client'
import { CurrencySchema } from '../inputTypeSchemas/CurrencySchema'
import { MatchingStrategySchema } from '../inputTypeSchemas/MatchingStrategySchema'
import { SyncFrequencySchema } from '../inputTypeSchemas/SyncFrequencySchema'

/////////////////////////////////////////
// FINANCIAL SETTINGS SCHEMA
/////////////////////////////////////////

export const FinancialSettingsSchema = z.object({
    defaultCurrency: CurrencySchema,
    matchingStrategy: MatchingStrategySchema,
    syncFrequency: SyncFrequencySchema,
    id: z.string().cuid(),
    userId: z.string(),
    enableMultiCurrency: z.boolean(),
    supportedCurrencies: z.string().nullish(),
    plaidEnabled: z.boolean(),
    gocardlessEnabled: z.boolean(),
    allowManualBankEntry: z.boolean(),
    requireBankVerification: z.boolean(),
    stripeEnabled: z.boolean(),
    stripeCardPaymentsCapability: z.string().nullish(),
    stripeTransfersCapability: z.string().nullish(),
    activePaymentProviders: z.string().nullish(),
    providerConfigs: z.string().nullish(),
    autoCategorizeTxn: z.boolean(),
    minTxnAmount: z
        .instanceof(Prisma.Decimal, { message: "Field 'minTxnAmount' must be a Decimal. Location: ['Models', 'FinancialSettings']" })
        .nullish(),
    maxTxnAmount: z
        .instanceof(Prisma.Decimal, { message: "Field 'maxTxnAmount' must be a Decimal. Location: ['Models', 'FinancialSettings']" })
        .nullish(),
    notifyLargeTransactions: z.boolean(),
    largeTransactionThreshold: z
        .instanceof(Prisma.Decimal, {
            message: "Field 'largeTransactionThreshold' must be a Decimal. Location: ['Models', 'FinancialSettings']"
        })
        .nullish(),
    notifyFailedSync: z.boolean(),
    notifyLowBalance: z.boolean(),
    lowBalanceThreshold: z
        .instanceof(Prisma.Decimal, { message: "Field 'lowBalanceThreshold' must be a Decimal. Location: ['Models', 'FinancialSettings']" })
        .nullish(),
    autoReconciliation: z.boolean(),
    reconciliationWindow: z.number().int(),
    lastSuccessfulSync: z.coerce.date().nullish(),
    syncStatus: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type FinancialSettings = z.infer<typeof FinancialSettingsSchema>

/////////////////////////////////////////
// FINANCIAL SETTINGS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const FinancialSettingsOptionalDefaultsSchema = FinancialSettingsSchema.merge(
    z.object({
        defaultCurrency: CurrencySchema.optional(),
        matchingStrategy: MatchingStrategySchema.optional(),
        syncFrequency: SyncFrequencySchema.optional(),
        id: z.string().cuid().optional(),
        enableMultiCurrency: z.boolean().optional(),
        plaidEnabled: z.boolean().optional(),
        gocardlessEnabled: z.boolean().optional(),
        allowManualBankEntry: z.boolean().optional(),
        requireBankVerification: z.boolean().optional(),
        stripeEnabled: z.boolean().optional(),
        autoCategorizeTxn: z.boolean().optional(),
        notifyLargeTransactions: z.boolean().optional(),
        notifyFailedSync: z.boolean().optional(),
        notifyLowBalance: z.boolean().optional(),
        autoReconciliation: z.boolean().optional(),
        reconciliationWindow: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type FinancialSettingsOptionalDefaults = z.infer<typeof FinancialSettingsOptionalDefaultsSchema>

export default FinancialSettingsSchema
