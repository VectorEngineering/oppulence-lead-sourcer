import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumCurrencyFilterSchema } from './EnumCurrencyFilterSchema'
import { CurrencySchema } from './CurrencySchema'
import { BoolFilterSchema } from './BoolFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumMatchingStrategyFilterSchema } from './EnumMatchingStrategyFilterSchema'
import { MatchingStrategySchema } from './MatchingStrategySchema'
import { EnumSyncFrequencyFilterSchema } from './EnumSyncFrequencyFilterSchema'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { UserRelationFilterSchema } from './UserRelationFilterSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const FinancialSettingsWhereInputSchema: z.ZodType<Prisma.FinancialSettingsWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => FinancialSettingsWhereInputSchema), z.lazy(() => FinancialSettingsWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => FinancialSettingsWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => FinancialSettingsWhereInputSchema), z.lazy(() => FinancialSettingsWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        defaultCurrency: z.union([z.lazy(() => EnumCurrencyFilterSchema), z.lazy(() => CurrencySchema)]).optional(),
        enableMultiCurrency: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        supportedCurrencies: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        plaidEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        gocardlessEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        allowManualBankEntry: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        requireBankVerification: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        stripeEnabled: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        stripeCardPaymentsCapability: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        stripeTransfersCapability: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        activePaymentProviders: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        providerConfigs: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        autoCategorizeTxn: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        minTxnAmount: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        maxTxnAmount: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        notifyLargeTransactions: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        largeTransactionThreshold: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        notifyFailedSync: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        notifyLowBalance: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        lowBalanceThreshold: z
            .union([
                z.lazy(() => DecimalNullableFilterSchema),
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            ])
            .optional()
            .nullable(),
        autoReconciliation: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
        reconciliationWindow: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        matchingStrategy: z.union([z.lazy(() => EnumMatchingStrategyFilterSchema), z.lazy(() => MatchingStrategySchema)]).optional(),
        syncFrequency: z.union([z.lazy(() => EnumSyncFrequencyFilterSchema), z.lazy(() => SyncFrequencySchema)]).optional(),
        lastSuccessfulSync: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        syncStatus: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional()
    })
    .strict()

export default FinancialSettingsWhereInputSchema
