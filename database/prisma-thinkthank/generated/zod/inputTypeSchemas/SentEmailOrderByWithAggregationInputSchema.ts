import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { SentEmailCountOrderByAggregateInputSchema } from './SentEmailCountOrderByAggregateInputSchema'
import { SentEmailMaxOrderByAggregateInputSchema } from './SentEmailMaxOrderByAggregateInputSchema'
import { SentEmailMinOrderByAggregateInputSchema } from './SentEmailMinOrderByAggregateInputSchema'

export const SentEmailOrderByWithAggregationInputSchema: z.ZodType<Prisma.SentEmailOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => SentEmailCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => SentEmailMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => SentEmailMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default SentEmailOrderByWithAggregationInputSchema
