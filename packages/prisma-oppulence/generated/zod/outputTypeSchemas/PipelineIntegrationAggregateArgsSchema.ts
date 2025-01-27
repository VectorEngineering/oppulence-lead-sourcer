import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PipelineIntegrationWhereInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereInputSchema'
import { PipelineIntegrationOrderByWithRelationInputSchema } from '../inputTypeSchemas/PipelineIntegrationOrderByWithRelationInputSchema'
import { PipelineIntegrationWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineIntegrationWhereUniqueInputSchema'

export const PipelineIntegrationAggregateArgsSchema: z.ZodType<Prisma.PipelineIntegrationAggregateArgs> = z
    .object({
        where: PipelineIntegrationWhereInputSchema.optional(),
        orderBy: z
            .union([PipelineIntegrationOrderByWithRelationInputSchema.array(), PipelineIntegrationOrderByWithRelationInputSchema])
            .optional(),
        cursor: PipelineIntegrationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PipelineIntegrationAggregateArgsSchema
