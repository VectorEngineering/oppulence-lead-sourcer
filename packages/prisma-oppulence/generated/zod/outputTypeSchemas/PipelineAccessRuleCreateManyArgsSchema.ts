import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAccessRuleCreateManyInputSchema } from '../inputTypeSchemas/PipelineAccessRuleCreateManyInputSchema'

export const PipelineAccessRuleCreateManyArgsSchema: z.ZodType<Prisma.PipelineAccessRuleCreateManyArgs> = z
    .object({
        data: z.union([PipelineAccessRuleCreateManyInputSchema, PipelineAccessRuleCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PipelineAccessRuleCreateManyArgsSchema
