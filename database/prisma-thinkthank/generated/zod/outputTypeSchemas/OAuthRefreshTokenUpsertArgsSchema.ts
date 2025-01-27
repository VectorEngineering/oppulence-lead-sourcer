import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { OAuthRefreshTokenIncludeSchema } from '../inputTypeSchemas/OAuthRefreshTokenIncludeSchema'
import { OAuthRefreshTokenWhereUniqueInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenWhereUniqueInputSchema'
import { OAuthRefreshTokenCreateInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenCreateInputSchema'
import { OAuthRefreshTokenUncheckedCreateInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenUncheckedCreateInputSchema'
import { OAuthRefreshTokenUpdateInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenUpdateInputSchema'
import { OAuthRefreshTokenUncheckedUpdateInputSchema } from '../inputTypeSchemas/OAuthRefreshTokenUncheckedUpdateInputSchema'
import { RestrictedTokenArgsSchema } from './RestrictedTokenArgsSchema'
import { InstalledIntegrationArgsSchema } from './InstalledIntegrationArgsSchema'
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

export const OAuthRefreshTokenUpsertArgsSchema: z.ZodType<Prisma.OAuthRefreshTokenUpsertArgs> = z
    .object({
        select: OAuthRefreshTokenSelectSchema.optional(),
        include: OAuthRefreshTokenIncludeSchema.optional(),
        where: OAuthRefreshTokenWhereUniqueInputSchema,
        create: z.union([OAuthRefreshTokenCreateInputSchema, OAuthRefreshTokenUncheckedCreateInputSchema]),
        update: z.union([OAuthRefreshTokenUpdateInputSchema, OAuthRefreshTokenUncheckedUpdateInputSchema])
    })
    .strict()

export default OAuthRefreshTokenUpsertArgsSchema
