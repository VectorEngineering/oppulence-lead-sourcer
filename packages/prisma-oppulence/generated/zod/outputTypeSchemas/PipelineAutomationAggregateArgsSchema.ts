import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineAutomationWhereInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereInputSchema'
import { PipelineAutomationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineAutomationOrderByWithRelationInputSchema'
import { PipelineAutomationWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineAutomationWhereUniqueInputSchema'

export const PipelineAutomationAggregateArgsSchema: z.ZodType<Prisma.PipelineAutomationAggregateArgs> = z
    .object({
        where: PipelineAutomationWhereInputSchema.optional(),
        orderBy: z
            .union([PipelineAutomationOrderByWithRelationInputSchema.array(), PipelineAutomationOrderByWithRelationInputSchema])
            .optional(),
        cursor: PipelineAutomationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineAutomationAggregateArgsSchema
