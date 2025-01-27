import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const SaleSumOrderByAggregateInputSchema: z.ZodType<Prisma.SaleSumOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional(),
        earnings: z.lazy(() => SortOrderSchema).optional(),
        commissionAmount: z.lazy(() => SortOrderSchema).optional(),
        recurringDuration: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default SaleSumOrderByAggregateInputSchema
