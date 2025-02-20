import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthRefreshTokenIncludeSchema } from '../inputTypeSchemas/OAuthRefreshTokenIncludeSchema'
import { OAuthRefreshTokenWhereInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereInputSchema'
import { OAuthRefreshTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenOrderByWithRelationInputSchema'
import { OAuthRefreshTokenWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereUniqueInputSchema'
import { OAuthRefreshTokenScalarFieldEnumSchema } from '../inputTypeSchemas/OAuthRefreshTokenScalarFieldEnumSchema'
import { RestrictedTokenArgsSchema } from '../outputTypeSchemas/RestrictedTokenArgsSchema'
import { InstalledIntegrationArgsSchema } from '../outputTypeSchemas/InstalledIntegrationArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OAuthRefreshTokenSelectSchema: z.ZodType<Prisma.OAuthRefreshTokenSelect> = z
    .object({
        id: z.boolean().optional(),
        installationId: z.boolean().optional(),
        accessTokenId: z.boolean().optional(),
        hashedRefreshToken: z.boolean().optional(),
        expiresAt: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        accessToken: z.union([z.boolean(), z.lazy(() => RestrictedTokenArgsSchema)]).optional(),
        installedIntegration: z.union([z.boolean(), z.lazy(() => InstalledIntegrationArgsSchema)]).optional()
    })
    .strict()

export const OAuthRefreshTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenFindFirstOrThrowArgs> = z
    .object({
        select: OAuthRefreshTokenSelectSchema.optional(),
        include: OAuthRefreshTokenIncludeSchema.optional(),
        where: OAuthRefreshTokenWhereInputSchema.optional(),
        orderBy: z
            .union([OAuthRefreshTokenOrderByWithRelationInputSchema.array(), OAuthRefreshTokenOrderByWithRelationInputSchema])
            .optional(),
        cursor: OAuthRefreshTokenWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([OAuthRefreshTokenScalarFieldEnumSchema, OAuthRefreshTokenScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default OAuthRefreshTokenFindFirstOrThrowArgsSchema
