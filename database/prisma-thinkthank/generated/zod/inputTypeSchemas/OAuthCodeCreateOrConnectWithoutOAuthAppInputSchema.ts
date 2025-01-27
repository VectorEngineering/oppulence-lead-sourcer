import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeCreateWithoutOAuthAppInputSchema } from './OAuthCodeCreateWithoutOAuthAppInputSchema'
import { OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema'

export const OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema: z.ZodType<Prisma.OAuthCodeCreateOrConnectWithoutOAuthAppInput> = z
    .object({
        where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => OAuthCodeCreateWithoutOAuthAppInputSchema),
            z.lazy(() => OAuthCodeUncheckedCreateWithoutOAuthAppInputSchema)
        ])
    })
    .strict()

export default OAuthCodeCreateOrConnectWithoutOAuthAppInputSchema
