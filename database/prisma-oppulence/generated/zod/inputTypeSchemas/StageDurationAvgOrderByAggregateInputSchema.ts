import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const StageDurationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StageDurationAvgOrderByAggregateInput> = z
    .object({
        expectedDays: z.lazy(() => SortOrderSchema).optional(),
        warningDays: z.lazy(() => SortOrderSchema).optional(),
        criticalDays: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default StageDurationAvgOrderByAggregateInputSchema
