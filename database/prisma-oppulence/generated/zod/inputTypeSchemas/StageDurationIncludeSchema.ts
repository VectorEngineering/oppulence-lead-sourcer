import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineArgsSchema } from '../outputTypeSchemas/PipelineArgsSchema'
import { PipelineStageArgsSchema } from '../outputTypeSchemas/PipelineStageArgsSchema'

export const StageDurationIncludeSchema: z.ZodType<Prisma.StageDurationInclude> = z
    .object({
        pipeline: z.union([z.boolean(), z.lazy(() => PipelineArgsSchema)]).optional(),
        stage: z.union([z.boolean(), z.lazy(() => PipelineStageArgsSchema)]).optional()
    })
    .strict()

export default StageDurationIncludeSchema
