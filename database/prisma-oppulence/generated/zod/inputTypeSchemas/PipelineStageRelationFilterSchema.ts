import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const PipelineStageRelationFilterSchema: z.ZodType<Prisma.PipelineStageRelationFilter> = z
    .object({
        is: z.lazy(() => PipelineStageWhereInputSchema).optional(),
        isNot: z.lazy(() => PipelineStageWhereInputSchema).optional()
    })
    .strict()

export default PipelineStageRelationFilterSchema
