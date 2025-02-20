import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema'

export const OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateWithoutInstalledIntegrationInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            hashedRefreshToken: z.string(),
            expiresAt: z.coerce.date(),
            createdAt: z.coerce.date().optional(),
            accessToken: z.lazy(() => RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema)
        })
        .strict()

export default OAuthRefreshTokenCreateWithoutInstalledIntegrationInputSchema
