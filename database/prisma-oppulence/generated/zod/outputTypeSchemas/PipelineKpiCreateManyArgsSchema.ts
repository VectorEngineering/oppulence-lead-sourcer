import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineKpiCreateManyInputSchema } from '../inputTypeSchemas/PipelineKpiCreateManyInputSchema'

export const PipelineKpiCreateManyArgsSchema: z.ZodType<Prisma.PipelineKpiCreateManyArgs> = z
    .object({
        data: z.union([PipelineKpiCreateManyInputSchema, PipelineKpiCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PipelineKpiCreateManyArgsSchema
