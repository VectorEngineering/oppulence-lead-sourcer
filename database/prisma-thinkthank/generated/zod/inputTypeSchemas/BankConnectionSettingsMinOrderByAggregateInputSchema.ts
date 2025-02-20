import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const BankConnectionSettingsMinOrderByAggregateInputSchema: z.ZodType<Prisma.BankConnectionSettingsMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        syncEnabled: z.lazy(() => SortOrderSchema).optional(),
        syncStartTime: z.lazy(() => SortOrderSchema).optional(),
        syncDayOfWeek: z.lazy(() => SortOrderSchema).optional(),
        syncDayOfMonth: z.lazy(() => SortOrderSchema).optional(),
        syncFrequency: z.lazy(() => SortOrderSchema).optional(),
        connectionTimeout: z.lazy(() => SortOrderSchema).optional(),
        readTimeout: z.lazy(() => SortOrderSchema).optional(),
        maxRequestsPerHour: z.lazy(() => SortOrderSchema).optional(),
        maxConcurrentRequests: z.lazy(() => SortOrderSchema).optional(),
        syncTransactions: z.lazy(() => SortOrderSchema).optional(),
        syncBalances: z.lazy(() => SortOrderSchema).optional(),
        syncStatements: z.lazy(() => SortOrderSchema).optional(),
        syncIdentity: z.lazy(() => SortOrderSchema).optional(),
        syncCategories: z.lazy(() => SortOrderSchema).optional(),
        syncMerchants: z.lazy(() => SortOrderSchema).optional(),
        syncAttachments: z.lazy(() => SortOrderSchema).optional(),
        historicalDays: z.lazy(() => SortOrderSchema).optional(),
        refreshTokenEnabled: z.lazy(() => SortOrderSchema).optional(),
        autoReconnectEnabled: z.lazy(() => SortOrderSchema).optional(),
        connectionStatus: z.lazy(() => SortOrderSchema).optional(),
        bankConnectionId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        merchantEnrichmentEnabled: z.lazy(() => SortOrderSchema).optional(),
        merchantCategorizationEnabled: z.lazy(() => SortOrderSchema).optional(),
        merchantLogoEnrichmentEnabled: z.lazy(() => SortOrderSchema).optional(),
        merchantNameCleaningEnabled: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default BankConnectionSettingsMinOrderByAggregateInputSchema
