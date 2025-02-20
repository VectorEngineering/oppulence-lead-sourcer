import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { CurrencySchema } from './CurrencySchema'
import { EnumCurrencyFieldUpdateOperationsInputSchema } from './EnumCurrencyFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { MatchingStrategySchema } from './MatchingStrategySchema'
import { EnumMatchingStrategyFieldUpdateOperationsInputSchema } from './EnumMatchingStrategyFieldUpdateOperationsInputSchema'
import { SyncFrequencySchema } from './SyncFrequencySchema'
import { EnumSyncFrequencyFieldUpdateOperationsInputSchema } from './EnumSyncFrequencyFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const FinancialSettingsUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.FinancialSettingsUncheckedUpdateWithoutUserInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        defaultCurrency: z.union([z.lazy(() => CurrencySchema), z.lazy(() => EnumCurrencyFieldUpdateOperationsInputSchema)]).optional(),
        enableMultiCurrency: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        supportedCurrencies: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        plaidEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        gocardlessEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        allowManualBankEntry: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        requireBankVerification: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        stripeEnabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        stripeCardPaymentsCapability: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        stripeTransfersCapability: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        activePaymentProviders: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        providerConfigs: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        autoCategorizeTxn: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        minTxnAmount: z
            .union([
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
                z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema)
            ])
            .optional()
            .nullable(),
        maxTxnAmount: z
            .union([
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
                z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema)
            ])
            .optional()
            .nullable(),
        notifyLargeTransactions: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        largeTransactionThreshold: z
            .union([
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
                z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema)
            ])
            .optional()
            .nullable(),
        notifyFailedSync: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        notifyLowBalance: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        lowBalanceThreshold: z
            .union([
                z
                    .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
                    .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
                z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema)
            ])
            .optional()
            .nullable(),
        autoReconciliation: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        reconciliationWindow: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
        matchingStrategy: z
            .union([z.lazy(() => MatchingStrategySchema), z.lazy(() => EnumMatchingStrategyFieldUpdateOperationsInputSchema)])
            .optional(),
        syncFrequency: z
            .union([z.lazy(() => SyncFrequencySchema), z.lazy(() => EnumSyncFrequencyFieldUpdateOperationsInputSchema)])
            .optional(),
        lastSuccessfulSync: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        syncStatus: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default FinancialSettingsUncheckedUpdateWithoutUserInputSchema
