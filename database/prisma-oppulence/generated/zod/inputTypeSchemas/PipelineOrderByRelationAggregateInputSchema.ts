import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PipelineOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineOrderByRelationAggregateInputSchema
