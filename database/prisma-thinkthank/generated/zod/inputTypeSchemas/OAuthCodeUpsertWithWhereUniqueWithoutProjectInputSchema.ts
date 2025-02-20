import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeUpdateWithoutProjectInputSchema } from './OAuthCodeUpdateWithoutProjectInputSchema'
import { OAuthCodeUncheckedUpdateWithoutProjectInputSchema } from './OAuthCodeUncheckedUpdateWithoutProjectInputSchema'
import { OAuthCodeCreateWithoutProjectInputSchema } from './OAuthCodeCreateWithoutProjectInputSchema'
import { OAuthCodeUncheckedCreateWithoutProjectInputSchema } from './OAuthCodeUncheckedCreateWithoutProjectInputSchema'

export const OAuthCodeUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeUpsertWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => OAuthCodeUpdateWithoutProjectInputSchema),
                z.lazy(() => OAuthCodeUncheckedUpdateWithoutProjectInputSchema)
            ]),
            create: z.union([
                z.lazy(() => OAuthCodeCreateWithoutProjectInputSchema),
                z.lazy(() => OAuthCodeUncheckedCreateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default OAuthCodeUpsertWithWhereUniqueWithoutProjectInputSchema
