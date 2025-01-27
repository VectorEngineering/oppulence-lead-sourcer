import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { jackson_ttlWhereInputSchema } from '../inputTypeSchemas/jackson_ttlWhereInputSchema'
import { jackson_ttlOrderByWithAggregationInputSchema } from '../inputTypeSchemas/jackson_ttlOrderByWithAggregationInputSchema'
import { Jackson_ttlScalarFieldEnumSchema } from '../inputTypeSchemas/Jackson_ttlScalarFieldEnumSchema'
import { jackson_ttlScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/jackson_ttlScalarWhereWithAggregatesInputSchema'

export const jackson_ttlGroupByArgsSchema: z.ZodType<Prisma.jackson_ttlGroupByArgs> = z
    .object({
        where: jackson_ttlWhereInputSchema.optional(),
        orderBy: z.union([jackson_ttlOrderByWithAggregationInputSchema.array(), jackson_ttlOrderByWithAggregationInputSchema]).optional(),
        by: Jackson_ttlScalarFieldEnumSchema.array(),
        having: jackson_ttlScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default jackson_ttlGroupByArgsSchema
