import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DealProductCountOrderByAggregateInputSchema } from './DealProductCountOrderByAggregateInputSchema'
import { DealProductAvgOrderByAggregateInputSchema } from './DealProductAvgOrderByAggregateInputSchema'
import { DealProductMaxOrderByAggregateInputSchema } from './DealProductMaxOrderByAggregateInputSchema'
import { DealProductMinOrderByAggregateInputSchema } from './DealProductMinOrderByAggregateInputSchema'
import { DealProductSumOrderByAggregateInputSchema } from './DealProductSumOrderByAggregateInputSchema'

export const DealProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.DealProductOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        dealId: z.lazy(() => SortOrderSchema).optional(),
        productId: z.lazy(() => SortOrderSchema).optional(),
        quantity: z.lazy(() => SortOrderSchema).optional(),
        unitPrice: z.lazy(() => SortOrderSchema).optional(),
        discount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        total: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => DealProductCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => DealProductAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => DealProductMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => DealProductMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => DealProductSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default DealProductOrderByWithAggregationInputSchema
