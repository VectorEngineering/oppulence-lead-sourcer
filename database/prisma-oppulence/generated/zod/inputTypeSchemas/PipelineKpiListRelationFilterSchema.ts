import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PipelineKpiWhereInputSchema } from './PipelineKpiWhereInputSchema'

export const PipelineKpiListRelationFilterSchema: z.ZodType<Prisma.PipelineKpiListRelationFilter> = z
    .object({
        every: z.lazy(() => PipelineKpiWhereInputSchema).optional(),
        some: z.lazy(() => PipelineKpiWhereInputSchema).optional(),
        none: z.lazy(() => PipelineKpiWhereInputSchema).optional()
    })
    .strict()

export default PipelineKpiListRelationFilterSchema
