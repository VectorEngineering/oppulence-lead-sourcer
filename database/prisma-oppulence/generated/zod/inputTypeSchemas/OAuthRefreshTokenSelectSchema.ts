import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { RestrictedTokenArgsSchema } from '../outputTypeSchemas/RestrictedTokenArgsSchema'
import { InstalledIntegrationArgsSchema } from '../outputTypeSchemas/InstalledIntegrationArgsSchema'

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

export default OAuthRefreshTokenSelectSchema
