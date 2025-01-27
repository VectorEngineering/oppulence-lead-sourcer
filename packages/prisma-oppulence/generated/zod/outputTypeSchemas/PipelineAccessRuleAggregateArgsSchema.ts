import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAccessRuleWhereInputSchema } from '../inputTypeSchemas/PipelineAccessRuleWhereInputSchema'
import { PipelineAccessRuleOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineAccessRuleOrderByWithRelationInputSchema'
import { PipelineAccessRuleWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineAccessRuleWhereUniqueInputSchema'

export const PipelineAccessRuleAggregateArgsSchema: z.ZodType<Prisma.PipelineAccessRuleAggregateArgs> = z
    .object({
        where: PipelineAccessRuleWhereInputSchema.optional(),
        orderBy: z
            .union([PipelineAccessRuleOrderByWithRelationInputSchema.array(), PipelineAccessRuleOrderByWithRelationInputSchema])
            .optional(),
        cursor: PipelineAccessRuleWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineAccessRuleAggregateArgsSchema
