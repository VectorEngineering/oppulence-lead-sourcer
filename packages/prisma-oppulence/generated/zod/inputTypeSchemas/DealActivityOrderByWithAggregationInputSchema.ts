import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealActivityCountOrderByAggregateInputSchema } from './DealActivityCountOrderByAggregateInputSchema'
import { DealActivityAvgOrderByAggregateInputSchema } from './DealActivityAvgOrderByAggregateInputSchema'
import { DealActivityMaxOrderByAggregateInputSchema } from './DealActivityMaxOrderByAggregateInputSchema'
import { DealActivityMinOrderByAggregateInputSchema } from './DealActivityMinOrderByAggregateInputSchema'
import { DealActivitySumOrderByAggregateInputSchema } from './DealActivitySumOrderByAggregateInputSchema'

export const DealActivityOrderByWithAggregationInputSchema: z.ZodType<Prisma.DealActivityOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        outcome: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        duration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        scheduledAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        completedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => DealActivityCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => DealActivityAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => DealActivityMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => DealActivityMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => DealActivitySumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default DealActivityOrderByWithAggregationInputSchema
