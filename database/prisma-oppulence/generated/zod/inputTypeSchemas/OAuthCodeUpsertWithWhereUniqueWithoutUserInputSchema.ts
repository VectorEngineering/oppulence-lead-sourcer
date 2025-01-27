import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeUpdateWithoutUserInputSchema } from './OAuthCodeUpdateWithoutUserInputSchema'
import { OAuthCodeUncheckedUpdateWithoutUserInputSchema } from './OAuthCodeUncheckedUpdateWithoutUserInputSchema'
import { OAuthCodeCreateWithoutUserInputSchema } from './OAuthCodeCreateWithoutUserInputSchema'
import { OAuthCodeUncheckedCreateWithoutUserInputSchema } from './OAuthCodeUncheckedCreateWithoutUserInputSchema'

export const OAuthCodeUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.OAuthCodeUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => OAuthCodeUpdateWithoutUserInputSchema),
            z.lazy(() => OAuthCodeUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([z.lazy(() => OAuthCodeCreateWithoutUserInputSchema), z.lazy(() => OAuthCodeUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default OAuthCodeUpsertWithWhereUniqueWithoutUserInputSchema
