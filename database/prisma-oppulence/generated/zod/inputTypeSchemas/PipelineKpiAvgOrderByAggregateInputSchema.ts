import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineKpiAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PipelineKpiAvgOrderByAggregateInput> = z
    .object({
        target: z.lazy(() => SortOrderSchema).optional(),
        current: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineKpiAvgOrderByAggregateInputSchema
