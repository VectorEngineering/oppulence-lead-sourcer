import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LinkTagWhereInputSchema } from '../inputTypeSchemas/LinkTagWhereInputSchema'
import { LinkTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LinkTagOrderByWithAggregationInputSchema'
import { LinkTagScalarFieldEnumSchema } from '../inputTypeSchemas/LinkTagScalarFieldEnumSchema'
import { LinkTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LinkTagScalarWhereWithAggregatesInputSchema'

export const LinkTagGroupByArgsSchema: z.ZodType<Prisma.LinkTagGroupByArgs> = z
    .object({
        where: LinkTagWhereInputSchema.optional(),
        orderBy: z.union([LinkTagOrderByWithAggregationInputSchema.array(), LinkTagOrderByWithAggregationInputSchema]).optional(),
        by: LinkTagScalarFieldEnumSchema.array(),
        having: LinkTagScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LinkTagGroupByArgsSchema
