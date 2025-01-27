import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LinkSumOrderByAggregateInputSchema: z.ZodType<Prisma.LinkSumOrderByAggregateInput> = z
    .object({
        clicks: z.lazy(() => SortOrderSchema).optional(),
        leads: z.lazy(() => SortOrderSchema).optional(),
        sales: z.lazy(() => SortOrderSchema).optional(),
        saleAmount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LinkSumOrderByAggregateInputSchema
