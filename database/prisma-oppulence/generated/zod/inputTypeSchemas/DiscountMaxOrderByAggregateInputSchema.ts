import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DiscountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        duration: z.lazy(() => SortOrderSchema).optional(),
        interval: z.lazy(() => SortOrderSchema).optional(),
        couponId: z.lazy(() => SortOrderSchema).optional(),
        couponTestId: z.lazy(() => SortOrderSchema).optional(),
        workspaceId: z.lazy(() => SortOrderSchema).optional(),
        programId: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DiscountMaxOrderByAggregateInputSchema
