import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthRefreshTokenCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUncheckedCreateWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateOrConnectWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema } from './OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema'
import { OAuthRefreshTokenWhereUniqueInputSchema } from './OAuthRefreshTokenWhereUniqueInputSchema'
import { OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInputSchema } from './OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInputSchema'
import { OAuthRefreshTokenScalarWhereInputSchema } from './OAuthRefreshTokenScalarWhereInputSchema'

export const OAuthRefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(() => OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInputSchema),
                    z.lazy(() => OAuthRefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => OAuthRefreshTokenCreateManyAccessTokenInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema),
                    z.lazy(() => OAuthRefreshTokenWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInputSchema),
                    z.lazy(() => OAuthRefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInputSchema),
                    z.lazy(() => OAuthRefreshTokenUpdateManyWithWhereWithoutAccessTokenInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema),
                    z.lazy(() => OAuthRefreshTokenScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default OAuthRefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInputSchema
