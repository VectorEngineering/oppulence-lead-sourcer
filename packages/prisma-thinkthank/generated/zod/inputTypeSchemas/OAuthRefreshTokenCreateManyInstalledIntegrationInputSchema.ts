import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const OAuthRefreshTokenCreateManyInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateManyInstalledIntegrationInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            accessTokenId: z.string(),
            hashedRefreshToken: z.string(),
            expiresAt: z.coerce.date(),
            createdAt: z.coerce.date().optional()
        })
        .strict()

export default OAuthRefreshTokenCreateManyInstalledIntegrationInputSchema
