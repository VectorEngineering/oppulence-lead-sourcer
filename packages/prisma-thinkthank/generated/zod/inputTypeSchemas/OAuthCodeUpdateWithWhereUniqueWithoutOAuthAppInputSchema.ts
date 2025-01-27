import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeUpdateWithoutOAuthAppInputSchema } from './OAuthCodeUpdateWithoutOAuthAppInputSchema'
import { OAuthCodeUncheckedUpdateWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedUpdateWithoutOAuthAppInputSchema'

export const OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInputSchema: z.ZodType<Prisma.OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInput> =
    z
        .object({
            where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => OAuthCodeUpdateWithoutOAuthAppInputSchema),
                z.lazy(() => OAuthCodeUncheckedUpdateWithoutOAuthAppInputSchema)
            ])
        })
        .strict()

export default OAuthCodeUpdateWithWhereUniqueWithoutOAuthAppInputSchema
