import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PayoutAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PayoutAvgOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional(),
        quantity: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PayoutAvgOrderByAggregateInputSchema
