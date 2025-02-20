import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema'
import { InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema'

export const OAuthRefreshTokenCreateInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        hashedRefreshToken: z.string(),
        expiresAt: z.coerce.date(),
        createdAt: z.coerce.date().optional(),
        accessToken: z.lazy(() => RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema),
        installedIntegration: z.lazy(() => InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema)
    })
    .strict()

export default OAuthRefreshTokenCreateInputSchema
