import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAccessRuleWhereInputSchema } from '../inputTypeSchemas/PipelineAccessRuleWhereInputSchema'

export const PipelineAccessRuleDeleteManyArgsSchema: z.ZodType<Prisma.PipelineAccessRuleDeleteManyArgs> = z
    .object({
        where: PipelineAccessRuleWhereInputSchema.optional()
    })
    .strict()

export default PipelineAccessRuleDeleteManyArgsSchema
