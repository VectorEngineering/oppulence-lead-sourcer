import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DealActivityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DealActivityAvgOrderByAggregateInput> = z
    .object({
        duration: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DealActivityAvgOrderByAggregateInputSchema
