import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationWhereInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereInputSchema'
import { PipelineAutomationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PipelineAutomationOrderByWithAggregationInputSchema'
import { PipelineAutomationScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineAutomationScalarFieldEnumSchema'
import { PipelineAutomationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PipelineAutomationScalarWhereWithAggregatesInputSchema'

export const PipelineAutomationGroupByArgsSchema: z.ZodType<Prisma.PipelineAutomationGroupByArgs> = z
    .object({
        where: PipelineAutomationWhereInputSchema.optional(),
        orderBy: z
            .union([PipelineAutomationOrderByWithAggregationInputSchema.array(), PipelineAutomationOrderByWithAggregationInputSchema])
            .optional(),
        by: PipelineAutomationScalarFieldEnumSchema.array(),
        having: PipelineAutomationScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineAutomationGroupByArgsSchema
