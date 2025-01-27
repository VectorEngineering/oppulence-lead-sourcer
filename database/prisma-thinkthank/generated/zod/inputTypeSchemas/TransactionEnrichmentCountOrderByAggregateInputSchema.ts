import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionEnrichmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionEnrichmentCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        categorySlug: z.lazy(() => SortOrderSchema).optional(),
        website: z.lazy(() => SortOrderSchema).optional(),
        merchantId: z.lazy(() => SortOrderSchema).optional(),
        merchantName: z.lazy(() => SortOrderSchema).optional(),
        merchantCategory: z.lazy(() => SortOrderSchema).optional(),
        merchantLocation: z.lazy(() => SortOrderSchema).optional(),
        merchantLogo: z.lazy(() => SortOrderSchema).optional(),
        merchantMetadata: z.lazy(() => SortOrderSchema).optional(),
        confidence: z.lazy(() => SortOrderSchema).optional(),
        source: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        version: z.lazy(() => SortOrderSchema).optional(),
        matchingRules: z.lazy(() => SortOrderSchema).optional(),
        patterns: z.lazy(() => SortOrderSchema).optional(),
        keywords: z.lazy(() => SortOrderSchema).optional(),
        sentiment: z.lazy(() => SortOrderSchema).optional(),
        riskScore: z.lazy(() => SortOrderSchema).optional(),
        anomalyScore: z.lazy(() => SortOrderSchema).optional(),
        isRecurring: z.lazy(() => SortOrderSchema).optional(),
        isSubscription: z.lazy(() => SortOrderSchema).optional(),
        isBillPayment: z.lazy(() => SortOrderSchema).optional(),
        isRefund: z.lazy(() => SortOrderSchema).optional(),
        customData: z.lazy(() => SortOrderSchema).optional(),
        metadata: z.lazy(() => SortOrderSchema).optional(),
        system: z.lazy(() => SortOrderSchema).optional(),
        enabled: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        lastAppliedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default TransactionEnrichmentCountOrderByAggregateInputSchema
