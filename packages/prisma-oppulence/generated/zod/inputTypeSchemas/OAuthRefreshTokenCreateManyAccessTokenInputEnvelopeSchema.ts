import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthRefreshTokenCreateManyAccessTokenInputSchema } from './OAuthRefreshTokenCreateManyAccessTokenInputSchema'

export const OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateManyAccessTokenInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => OAuthRefreshTokenCreateManyAccessTokenInputSchema),
                z.lazy(() => OAuthRefreshTokenCreateManyAccessTokenInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema
