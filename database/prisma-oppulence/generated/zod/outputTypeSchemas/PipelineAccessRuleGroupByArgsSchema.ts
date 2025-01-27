import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAccessRuleWhereInputSchema } from '../inputTypeSchemas/PipelineAccessRuleWhereInputSchema'
import { PipelineAccessRuleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PipelineAccessRuleOrderByWithAggregationInputSchema'
import { PipelineAccessRuleScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineAccessRuleScalarFieldEnumSchema'
import { PipelineAccessRuleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PipelineAccessRuleScalarWhereWithAggregatesInputSchema'

export const PipelineAccessRuleGroupByArgsSchema: z.ZodType<Prisma.PipelineAccessRuleGroupByArgs> = z
    .object({
        where: PipelineAccessRuleWhereInputSchema.optional(),
        orderBy: z
            .union([PipelineAccessRuleOrderByWithAggregationInputSchema.array(), PipelineAccessRuleOrderByWithAggregationInputSchema])
            .optional(),
        by: PipelineAccessRuleScalarFieldEnumSchema.array(),
        having: PipelineAccessRuleScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineAccessRuleGroupByArgsSchema
