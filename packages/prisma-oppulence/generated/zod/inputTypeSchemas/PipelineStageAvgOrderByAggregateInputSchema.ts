import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineStageAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineStageAvgOrderByAggregateInput> = z
    .object({
        order: z.lazy(() => SortOrderSchema).optional(),
        probability: z.lazy(() => SortOrderSchema).optional(),
        autoMoveAfterDays: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineStageAvgOrderByAggregateInputSchema
