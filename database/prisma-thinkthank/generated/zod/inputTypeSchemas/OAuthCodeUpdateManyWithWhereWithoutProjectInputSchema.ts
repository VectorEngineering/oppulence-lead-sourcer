import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeScalarWhereInputSchema } from './OAuthCodeScalarWhereInputSchema'
import { OAuthCodeUpdateManyMutationInputSchema } from './OAuthCodeUpdateManyMutationInputSchema'
import { OAuthCodeUncheckedUpdateManyWithoutProjectInputSchema } from './OAuthCodeUncheckedUpdateManyWithoutProjectInputSchema'

export const OAuthCodeUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => OAuthCodeScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => OAuthCodeUpdateManyMutationInputSchema),
            z.lazy(() => OAuthCodeUncheckedUpdateManyWithoutProjectInputSchema)
        ])
    })
    .strict()

export default OAuthCodeUpdateManyWithWhereWithoutProjectInputSchema
