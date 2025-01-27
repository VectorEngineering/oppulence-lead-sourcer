import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DiscountSumOrderByAggregateInputSchema: z.ZodType<Prisma.DiscountSumOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional(),
        duration: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DiscountSumOrderByAggregateInputSchema
