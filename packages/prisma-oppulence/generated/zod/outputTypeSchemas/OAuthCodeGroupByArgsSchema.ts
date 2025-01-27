import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthCodeWhereInputSchema } from '../inputTypeSchemas/OAuthCodeWhereInputSchema'
import { OAuthCodeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OAuthCodeOrderByWithAggregationInputSchema'
import { OAuthCodeScalarFieldEnumSchema } from '../inputTypeSchemas/OAuthCodeScalarFieldEnumSchema'
import { OAuthCodeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OAuthCodeScalarWhereWithAggregatesInputSchema'

export const OAuthCodeGroupByArgsSchema: z.ZodType<Prisma.OAuthCodeGroupByArgs> = z
    .object({
        where: OAuthCodeWhereInputSchema.optional(),
        orderBy: z.union([OAuthCodeOrderByWithAggregationInputSchema.array(), OAuthCodeOrderByWithAggregationInputSchema]).optional(),
        by: OAuthCodeScalarFieldEnumSchema.array(),
        having: OAuthCodeScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default OAuthCodeGroupByArgsSchema
