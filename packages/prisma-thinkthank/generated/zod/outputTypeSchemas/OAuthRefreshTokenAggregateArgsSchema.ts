import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthRefreshTokenWhereInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereInputSchema'
import { OAuthRefreshTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenOrderByWithRelationInputSchema'
import { OAuthRefreshTokenWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereUniqueInputSchema'

export const OAuthRefreshTokenAggregateArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenAggregateArgs> = z
    .object({
        where: OAuthRefreshTokenWhereInputSchema.optional(),
        orderBy: z
            .union([OAuthRefreshTokenOrderByWithRelationInputSchema.array(), OAuthRefreshTokenOrderByWithRelationInputSchema])
            .optional(),
        cursor: OAuthRefreshTokenWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default OAuthRefreshTokenAggregateArgsSchema
