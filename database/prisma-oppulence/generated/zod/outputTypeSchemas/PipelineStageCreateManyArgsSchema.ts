import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineStageCreateManyInputSchema } from '../inputTypeSchemas/PipelineStageCreateManyInputSchema'

export const PipelineStageCreateManyArgsSchema: z.ZodType<Prisma.PipelineStageCreateManyArgs> = z
    .object({
        data: z.union([PipelineStageCreateManyInputSchema, PipelineStageCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PipelineStageCreateManyArgsSchema
