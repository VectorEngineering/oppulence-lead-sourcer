import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const PipelineAccessRuleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PipelineAccessRuleOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default PipelineAccessRuleOrderByRelationAggregateInputSchema
