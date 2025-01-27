import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { jackson_ttlCountOrderByAggregateInputSchema } from './jackson_ttlCountOrderByAggregateInputSchema'
import { jackson_ttlAvgOrderByAggregateInputSchema } from './jackson_ttlAvgOrderByAggregateInputSchema'
import { jackson_ttlMaxOrderByAggregateInputSchema } from './jackson_ttlMaxOrderByAggregateInputSchema'
import { jackson_ttlMinOrderByAggregateInputSchema } from './jackson_ttlMinOrderByAggregateInputSchema'
import { jackson_ttlSumOrderByAggregateInputSchema } from './jackson_ttlSumOrderByAggregateInputSchema'

export const jackson_ttlOrderByWithAggregationInputSchema: z.ZodType<Prisma.jackson_ttlOrderByWithAggregationInput> = z
    .object({
        key: z.lazy(() => SortOrderSchema).optional(),
        expiresAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => jackson_ttlCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => jackson_ttlAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => jackson_ttlMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => jackson_ttlMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => jackson_ttlSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default jackson_ttlOrderByWithAggregationInputSchema
