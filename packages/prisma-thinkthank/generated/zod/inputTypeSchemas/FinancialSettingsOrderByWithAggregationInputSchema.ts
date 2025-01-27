import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { FinancialSettingsCountOrderByAggregateInputSchema } from './FinancialSettingsCountOrderByAggregateInputSchema'
import { FinancialSettingsAvgOrderByAggregateInputSchema } from './FinancialSettingsAvgOrderByAggregateInputSchema'
import { FinancialSettingsMaxOrderByAggregateInputSchema } from './FinancialSettingsMaxOrderByAggregateInputSchema'
import { FinancialSettingsMinOrderByAggregateInputSchema } from './FinancialSettingsMinOrderByAggregateInputSchema'
import { FinancialSettingsSumOrderByAggregateInputSchema } from './FinancialSettingsSumOrderByAggregateInputSchema'

export const FinancialSettingsOrderByWithAggregationInputSchema: z.ZodType<Prisma.FinancialSettingsOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        userId: z.lazy(() => SortOrderSchema).optional(),
        defaultCurrency: z.lazy(() => SortOrderSchema).optional(),
        enableMultiCurrency: z.lazy(() => SortOrderSchema).optional(),
        supportedCurrencies: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        plaidEnabled: z.lazy(() => SortOrderSchema).optional(),
        gocardlessEnabled: z.lazy(() => SortOrderSchema).optional(),
        allowManualBankEntry: z.lazy(() => SortOrderSchema).optional(),
        requireBankVerification: z.lazy(() => SortOrderSchema).optional(),
        stripeEnabled: z.lazy(() => SortOrderSchema).optional(),
        stripeCardPaymentsCapability: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        stripeTransfersCapability: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        activePaymentProviders: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        providerConfigs: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        autoCategorizeTxn: z.lazy(() => SortOrderSchema).optional(),
        minTxnAmount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        maxTxnAmount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        notifyLargeTransactions: z.lazy(() => SortOrderSchema).optional(),
        largeTransactionThreshold: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        notifyFailedSync: z.lazy(() => SortOrderSchema).optional(),
        notifyLowBalance: z.lazy(() => SortOrderSchema).optional(),
        lowBalanceThreshold: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        autoReconciliation: z.lazy(() => SortOrderSchema).optional(),
        reconciliationWindow: z.lazy(() => SortOrderSchema).optional(),
        matchingStrategy: z.lazy(() => SortOrderSchema).optional(),
        syncFrequency: z.lazy(() => SortOrderSchema).optional(),
        lastSuccessfulSync: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        syncStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => FinancialSettingsCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => FinancialSettingsAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => FinancialSettingsMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => FinancialSettingsMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => FinancialSettingsSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default FinancialSettingsOrderByWithAggregationInputSchema
