import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationCreateManyInputSchema } from '../inputTypeSchemas/PipelineAutomationCreateManyInputSchema'

export const PipelineAutomationCreateManyArgsSchema: z.ZodType<Prisma.PipelineAutomationCreateManyArgs> = z
    .object({
        data: z.union([PipelineAutomationCreateManyInputSchema, PipelineAutomationCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PipelineAutomationCreateManyArgsSchema
