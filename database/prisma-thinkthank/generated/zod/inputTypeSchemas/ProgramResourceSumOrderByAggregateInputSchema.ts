import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramResourceSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramResourceSumOrderByAggregateInput> = z
    .object({
        size: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProgramResourceSumOrderByAggregateInputSchema
