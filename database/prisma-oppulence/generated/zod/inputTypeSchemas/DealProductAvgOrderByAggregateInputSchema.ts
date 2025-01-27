import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DealProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DealProductAvgOrderByAggregateInput> = z
    .object({
        quantity: z.lazy(() => SortOrderSchema).optional(),
        unitPrice: z.lazy(() => SortOrderSchema).optional(),
        discount: z.lazy(() => SortOrderSchema).optional(),
        total: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DealProductAvgOrderByAggregateInputSchema
