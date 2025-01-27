import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineStageWhereInputSchema } from '../inputTypeSchemas/PipelineStageWhereInputSchema'
import { PipelineStageOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PipelineStageOrderByWithAggregationInputSchema'
import { PipelineStageScalarFieldEnumSchema } from '../inputTypeSchemas/PipelineStageScalarFieldEnumSchema'
import { PipelineStageScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PipelineStageScalarWhereWithAggregatesInputSchema'

export const PipelineStageGroupByArgsSchema: z.ZodType<Prisma.PipelineStageGroupByArgs> = z
    .object({
        where: PipelineStageWhereInputSchema.optional(),
        orderBy: z
            .union([PipelineStageOrderByWithAggregationInputSchema.array(), PipelineStageOrderByWithAggregationInputSchema])
            .optional(),
        by: PipelineStageScalarFieldEnumSchema.array(),
        having: PipelineStageScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineStageGroupByArgsSchema
