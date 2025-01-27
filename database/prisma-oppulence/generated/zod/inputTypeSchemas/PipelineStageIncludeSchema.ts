import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineArgsSchema } from '../outputTypeSchemas/PipelineArgsSchema'
import { DealFindManyArgsSchema } from '../outputTypeSchemas/DealFindManyArgsSchema'
import { StageRequiredFieldFindManyArgsSchema } from '../outputTypeSchemas/StageRequiredFieldFindManyArgsSchema'
import { StageDurationArgsSchema } from '../outputTypeSchemas/StageDurationArgsSchema'
import { PipelineStageCountOutputTypeArgsSchema } from '../outputTypeSchemas/PipelineStageCountOutputTypeArgsSchema'

export const PipelineStageIncludeSchema: z.ZodType<Prisma.PipelineStageInclude> = z
    .object({
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        deals: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        requiredFields: z.union([z.boolean(), z.lazy(() => StageRequiredFieldFindManyArgsSchema)]).optional(),
        stageDuration: z.union([z.boolean(), z.lazy(() => StageDurationArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineStageCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default PipelineStageIncludeSchema
