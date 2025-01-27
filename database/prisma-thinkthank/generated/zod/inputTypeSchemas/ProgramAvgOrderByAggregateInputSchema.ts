import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ProgramAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProgramAvgOrderByAggregateInput> = z
    .object({
        cookieLength: z.lazy(() => SortOrderSchema).optional(),
        commissionAmount: z.lazy(() => SortOrderSchema).optional(),
        commissionDuration: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ProgramAvgOrderByAggregateInputSchema
