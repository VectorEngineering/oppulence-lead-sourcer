import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineKpiOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PipelineKpiOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineKpiOrderByRelationAggregateInputSchema
