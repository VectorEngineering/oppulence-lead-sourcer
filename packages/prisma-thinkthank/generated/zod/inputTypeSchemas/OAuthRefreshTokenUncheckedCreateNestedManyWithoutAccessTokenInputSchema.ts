import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthRefreshTokenCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema } from './OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema'
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema'

export const OAuthRefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthRefreshTokenCreateWithoutAccessTokenInputSchema),
                    z.lazy(() => OAuthRefreshTokenCreateWithoutAccessTokenInputSchema).array(),
                    z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema),
                    z.lazy(() => OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema),
                    z.lazy(() => OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default OAuthRefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInputSchema
