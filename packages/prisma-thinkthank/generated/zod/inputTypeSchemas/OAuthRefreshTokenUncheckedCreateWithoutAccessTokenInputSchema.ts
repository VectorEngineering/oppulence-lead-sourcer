import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInput> =
    z
        .object({
            id: z.string().cuid().optional(),
            installationId: z.string(),
            hashedRefreshToken: z.string(),
            expiresAt: z.coerce.date(),
            createdAt: z.coerce.date().optional()
        })
        .strict()

export default OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema
