import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const jackson_indexAvgOrderByAggregateInputSchema: z.ZodType<Prisma.jackson_indexAvgOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default jackson_indexAvgOrderByAggregateInputSchema
