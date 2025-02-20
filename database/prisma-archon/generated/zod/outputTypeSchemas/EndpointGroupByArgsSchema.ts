import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointWhereInputSchema } from '../inputTypeSchemas/EndpointWhereInputSchema'
import { EndpointOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EndpointOrderByWithAggregationInputSchema'
import { EndpointScalarFieldEnumSchema } from '../inputTypeSchemas/EndpointScalarFieldEnumSchema'
import { EndpointScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EndpointScalarWhereWithAggregatesInputSchema'

export const EndpointGroupByArgsSchema: z.ZodType<Prisma.EndpointGroupByArgs> = z
    .object({
        where: EndpointWhereInputSchema.optional(),
        orderBy: z.union([EndpointOrderByWithAggregationInputSchema.array(), EndpointOrderByWithAggregationInputSchema]).optional(),
        by: EndpointScalarFieldEnumSchema.array(),
        having: EndpointScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default EndpointGroupByArgsSchema
