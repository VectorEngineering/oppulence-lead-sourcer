import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const SaleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SaleAvgOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional(),
        earnings: z.lazy(() => SortOrderSchema).optional(),
        commissionAmount: z.lazy(() => SortOrderSchema).optional(),
        recurringDuration: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default SaleAvgOrderByAggregateInputSchema
