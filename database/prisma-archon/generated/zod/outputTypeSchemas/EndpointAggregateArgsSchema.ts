import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointWhereInputSchema } from '../inputTypeSchemas/EndpointWhereInputSchema'
import { EndpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/EndpointOrderByWithRelationInputSchema'
import { EndpointWhereUniqueInputSchema } from '../inputTypeSchemas/EndpointWhereUniqueInputSchema'

export const EndpointAggregateArgsSchema: z.ZodType<Prisma.EndpointAggregateArgs> = z
    .object({
        where: EndpointWhereInputSchema.optional(),
        orderBy: z.union([EndpointOrderByWithRelationInputSchema.array(), EndpointOrderByWithRelationInputSchema]).optional(),
        cursor: EndpointWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default EndpointAggregateArgsSchema
