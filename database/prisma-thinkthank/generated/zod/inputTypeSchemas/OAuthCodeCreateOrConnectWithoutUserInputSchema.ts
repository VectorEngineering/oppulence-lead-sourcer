import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeWhereUniqueInputSchema } from './OAuthCodeWhereUniqueInputSchema'
import { OAuthCodeCreateWithoutUserInputSchema } from './OAuthCodeCreateWithoutUserInputSchema'
import { OAuthCodeUncheckedCreateWithoutUserInputSchema } from './OAuthCodeUncheckedCreateWithoutUserInputSchema'

export const OAuthCodeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.OAuthCodeCreateOrConnectWithoutUserInput> = z
    .object({
        where: z.lazy(() => OAuthCodeWhereUniqueInputSchema),
        create: z.union([z.lazy(() => OAuthCodeCreateWithoutUserInputSchema), z.lazy(() => OAuthCodeUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default OAuthCodeCreateOrConnectWithoutUserInputSchema
