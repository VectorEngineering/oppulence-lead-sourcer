import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineStageWhereInputSchema } from './PipelineStageWhereInputSchema'

export const PipelineStageListRelationFilterSchema: z.ZodType<Prisma.PipelineStageListRelationFilter> = z
    .object({
        every: z.lazy(() => PipelineStageWhereInputSchema).optional(),
        some: z.lazy(() => PipelineStageWhereInputSchema).optional(),
        none: z.lazy(() => PipelineStageWhereInputSchema).optional()
    })
    .strict()

export default PipelineStageListRelationFilterSchema
