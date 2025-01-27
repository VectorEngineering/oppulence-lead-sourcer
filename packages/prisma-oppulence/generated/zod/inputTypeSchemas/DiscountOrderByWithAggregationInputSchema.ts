import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { DiscountCountOrderByAggregateInputSchema } from './DiscountCountOrderByAggregateInputSchema'
import { DiscountAvgOrderByAggregateInputSchema } from './DiscountAvgOrderByAggregateInputSchema'
import { DiscountMaxOrderByAggregateInputSchema } from './DiscountMaxOrderByAggregateInputSchema'
import { DiscountMinOrderByAggregateInputSchema } from './DiscountMinOrderByAggregateInputSchema'
import { DiscountSumOrderByAggregateInputSchema } from './DiscountSumOrderByAggregateInputSchema'

export const DiscountOrderByWithAggregationInputSchema: z.ZodType<Prisma.DiscountOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        duration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        interval: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        couponId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        couponTestId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        programId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => DiscountCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => DiscountAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => DiscountMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => DiscountMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => DiscountSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default DiscountOrderByWithAggregationInputSchema
