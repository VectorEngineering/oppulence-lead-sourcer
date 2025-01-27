import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { DefaultDomainsWhereInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereInputSchema'
import { DefaultDomainsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/DefaultDomainsOrderByWithAggregationInputSchema'
import { DefaultDomainsScalarFieldEnumSchema } from '../inputTypeSchemas/DefaultDomainsScalarFieldEnumSchema'
import { DefaultDomainsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/DefaultDomainsScalarWhereWithAggregatesInputSchema'

export const DefaultDomainsGroupByArgsSchema: z.ZodType<Prisma.DefaultDomainsGroupByArgs> = z
    .object({
        where: DefaultDomainsWhereInputSchema.optional(),
        orderBy: z
            .union([DefaultDomainsOrderByWithAggregationInputSchema.array(), DefaultDomainsOrderByWithAggregationInputSchema])
            .optional(),
        by: DefaultDomainsScalarFieldEnumSchema.array(),
        having: DefaultDomainsScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default DefaultDomainsGroupByArgsSchema
