import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumCurrencyWithAggregatesFilterSchema } from './EnumCurrencyWithAggregatesFilterSchema'
import { CurrencySchema } from './CurrencySchema'
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DecimalNullableWithAggregatesFilterSchema } from './DecimalNullableWithAggregatesFilterSchema'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { EnumMatchingStrategyWithAggregatesFilterSchema } from './EnumMatchingStrategyWithAggregatesFilterSchema'
import { MatchingStrategySchema } from './MatchingStrategySchema'
import { EnumSyncFrequencyWithAggregatesFilterSchema } from './EnumSyncFrequencyWithAggregatesFilterSchema'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const FinancialSettingsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.FinancialSettingsScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => FinancialSettingsScalarWhereWithAggregatesInputSchema),
                z.lazy(() => FinancialSettingsScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => FinancialSettingsScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => FinancialSettingsScalarWhereWithAggregatesInputSchema),
                z.lazy(() => FinancialSettingsScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        defaultCurrency: z.union([z.lazy(() => EnumCurrencyWithAggregatesFilterSchema), z.lazy(() => CurrencySchema)]).optional(),
        enableMultiCurrency: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        supportedCurrencies: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        plaidEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        gocardlessEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        allowManualBankEntry: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        requireBankVerification: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        stripeEnabled: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        stripeCardPaymentsCapability: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        stripeTransfersCapability: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        activePaymentProviders: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        providerConfigs: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        autoCategorizeTxn: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        minTxnAmount: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        maxTxnAmount: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        notifyLargeTransactions: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        largeTransactionThreshold: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        notifyFailedSync: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        notifyLowBalance: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        lowBalanceThreshold: z
            .union([
                z.lazy(() => DecimalNullableWithAggregatesFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        autoReconciliation: z.union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()]).optional(),
        reconciliationWindow: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        matchingStrategy: z
            .union([z.lazy(() => EnumMatchingStrategyWithAggregatesFilterSchema), z.lazy(() => MatchingStrategySchema)])
            .optional(),
        syncFrequency: z.union([z.lazy(() => EnumSyncFrequencyWithAggregatesFilterSchema), z.lazy(() => SyncFrequencySchema)]).optional(),
        lastSuccessfulSync: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        syncStatus: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default FinancialSettingsScalarWhereWithAggregatesInputSchema
