import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenWhereInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereInputSchema'
import { RestrictedTokenOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RestrictedTokenOrderByWithAggregationInputSchema'
import { RestrictedTokenScalarFieldEnumSchema } from '../inputTypeSchemas/RestrictedTokenScalarFieldEnumSchema'
import { RestrictedTokenScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RestrictedTokenScalarWhereWithAggregatesInputSchema'

export const RestrictedTokenGroupByArgsSchema: z.ZodType<Prisma.RestrictedTokenGroupByArgs> = z
    .object({
        where: RestrictedTokenWhereInputSchema.optional(),
        orderBy: z
            .union([RestrictedTokenOrderByWithAggregationInputSchema.array(), RestrictedTokenOrderByWithAggregationInputSchema])
            .optional(),
        by: RestrictedTokenScalarFieldEnumSchema.array(),
        having: RestrictedTokenScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default RestrictedTokenGroupByArgsSchema
