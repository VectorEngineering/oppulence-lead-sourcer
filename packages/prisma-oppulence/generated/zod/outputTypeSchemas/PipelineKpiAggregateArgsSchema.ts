import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineKpiWhereInputSchema } from '../inputTypeSchemas/PipelineKpiWhereInputSchema'
import { PipelineKpiOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineKpiOrderByWithRelationInputSchema'
import { PipelineKpiWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineKpiWhereUniqueInputSchema'

export const PipelineKpiAggregateArgsSchema: z.ZodType<Prisma.PipelineKpiAggregateArgs> = z
    .object({
        where: PipelineKpiWhereInputSchema.optional(),
        orderBy: z.union([PipelineKpiOrderByWithRelationInputSchema.array(), PipelineKpiOrderByWithRelationInputSchema]).optional(),
        cursor: PipelineKpiWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineKpiAggregateArgsSchema
