import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeScalarWhereInputSchema } from './OAuthCodeScalarWhereInputSchema'
import { OAuthCodeUpdateManyMutationInputSchema } from './OAuthCodeUpdateManyMutationInputSchema'
import { OAuthCodeUncheckedUpdateManyWithoutUserInputSchema } from './OAuthCodeUncheckedUpdateManyWithoutUserInputSchema'

export const OAuthCodeUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.OAuthCodeUpdateManyWithWhereWithoutUserInput> = z
    .object({
        where: z.lazy(() => OAuthCodeScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => OAuthCodeUpdateManyMutationInputSchema),
            z.lazy(() => OAuthCodeUncheckedUpdateManyWithoutUserInputSchema)
        ])
    })
    .strict()

export default OAuthCodeUpdateManyWithWhereWithoutUserInputSchema
