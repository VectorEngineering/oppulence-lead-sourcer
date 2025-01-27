import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeCreateWithoutProjectInputSchema } from './OAuthCodeCreateWithoutProjectInputSchema'
import { OAuthCodeUncheckedCreateWithoutProjectInputSchema } from './OAuthCodeUncheckedCreateWithoutProjectInputSchema'

export const OAuthCodeCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => OAuthCodeCreateWithoutProjectInputSchema),
            z.lazy(() => OAuthCodeUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default OAuthCodeCreateOrConnectWithoutProjectInputSchema
