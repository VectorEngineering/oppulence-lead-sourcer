import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeCreateWithoutOAuthAppInputSchema } from './OAuthCodeCreateWithoutOAuthAppInputSchema'
import { OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema'
import { OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema } from './OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema'
import { OAuthCodeCreateManyOAuthAppInputEnvelopeSchema } from './OAuthCodeCreateManyOAuthAppInputEnvelopeSchema'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'

export const OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema: z.ZodType<Prisma.OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => OAuthCodeCreateWithoutOAuthAppInputSchema),
                    z.lazy(() => OAuthCodeCreateWithoutOAuthAppInputSchema).array(),
                    z.lazy(() => OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema),
                    z.lazy(() => OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema),
                    z.lazy(() => OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => OAuthCodeCreateManyOAuthAppInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => OAuthCodeWhereUniqueInputSchema), z.lazy(() => OAuthCodeWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema
