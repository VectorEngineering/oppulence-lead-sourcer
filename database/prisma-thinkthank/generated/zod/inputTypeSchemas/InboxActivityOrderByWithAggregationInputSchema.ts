import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InboxActivityCountOrderByAggregateInputSchema } from './InboxActivityCountOrderByAggregateInputSchema'
import { InboxActivityAvgOrderByAggregateInputSchema } from './InboxActivityAvgOrderByAggregateInputSchema'
import { InboxActivityMaxOrderByAggregateInputSchema } from './InboxActivityMaxOrderByAggregateInputSchema'
import { InboxActivityMinOrderByAggregateInputSchema } from './InboxActivityMinOrderByAggregateInputSchema'
import { InboxActivitySumOrderByAggregateInputSchema } from './InboxActivitySumOrderByAggregateInputSchema'

export const InboxActivityOrderByWithAggregationInputSchema: z.ZodType<Prisma.InboxActivityOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        inboxId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ipAddress: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        userAgent: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        sessionId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        requestId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        success: z.lazy(() => SortOrderSchema).optional(),
        errorDetails: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        severity: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        source: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        deviceInfo: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        riskScore: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => InboxActivityCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => InboxActivityAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => InboxActivityMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => InboxActivityMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => InboxActivitySumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default InboxActivityOrderByWithAggregationInputSchema
