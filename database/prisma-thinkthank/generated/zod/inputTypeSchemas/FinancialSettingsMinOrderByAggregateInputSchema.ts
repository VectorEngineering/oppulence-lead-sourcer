import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const FinancialSettingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialSettingsMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        defaultCurrency: z.lazy(() => SortOrderSchema).optional(),
        enableMultiCurrency: z.lazy(() => SortOrderSchema).optional(),
        supportedCurrencies: z.lazy(() => SortOrderSchema).optional(),
        plaidEnabled: z.lazy(() => SortOrderSchema).optional(),
        gocardlessEnabled: z.lazy(() => SortOrderSchema).optional(),
        allowManualBankEntry: z.lazy(() => SortOrderSchema).optional(),
        requireBankVerification: z.lazy(() => SortOrderSchema).optional(),
        stripeEnabled: z.lazy(() => SortOrderSchema).optional(),
        stripeCardPaymentsCapability: z.lazy(() => SortOrderSchema).optional(),
        stripeTransfersCapability: z.lazy(() => SortOrderSchema).optional(),
        activePaymentProviders: z.lazy(() => SortOrderSchema).optional(),
        providerConfigs: z.lazy(() => SortOrderSchema).optional(),
        autoCategorizeTxn: z.lazy(() => SortOrderSchema).optional(),
        minTxnAmount: z.lazy(() => SortOrderSchema).optional(),
        maxTxnAmount: z.lazy(() => SortOrderSchema).optional(),
        notifyLargeTransactions: z.lazy(() => SortOrderSchema).optional(),
        largeTransactionThreshold: z.lazy(() => SortOrderSchema).optional(),
        notifyFailedSync: z.lazy(() => SortOrderSchema).optional(),
        notifyLowBalance: z.lazy(() => SortOrderSchema).optional(),
        lowBalanceThreshold: z.lazy(() => SortOrderSchema).optional(),
        autoReconciliation: z.lazy(() => SortOrderSchema).optional(),
        reconciliationWindow: z.lazy(() => SortOrderSchema).optional(),
        matchingStrategy: z.lazy(() => SortOrderSchema).optional(),
        syncFrequency: z.lazy(() => SortOrderSchema).optional(),
        lastSuccessfulSync: z.lazy(() => SortOrderSchema).optional(),
        syncStatus: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default FinancialSettingsMinOrderByAggregateInputSchema
