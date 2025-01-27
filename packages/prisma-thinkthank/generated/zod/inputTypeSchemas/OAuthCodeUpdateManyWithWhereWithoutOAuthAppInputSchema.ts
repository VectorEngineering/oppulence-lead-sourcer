import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { OAuthCodeScalarWhereInputSchema } from './OAuthCodeScalarWhereInputSchema'
import { OAuthCodeUpdateManyMutationInputSchema } from './OAuthCodeUpdateManyMutationInputSchema'
import { OAuthCodeUncheckedUpdateManyWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedUpdateManyWithoutOAuthAppInputSchema'

export const OAuthCodeUpdateManyWithWhereWithoutOAuthAppInputSchema: z.ZodType<Prisma.OAuthCodeUpdateManyWithWhereWithoutOAuthAppInput> = z
    .object({
        where: z.lazy(() => OAuthCodeScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => OAuthCodeUpdateManyMutationInputSchema),
            z.lazy(() => OAuthCodeUncheckedUpdateManyWithoutOAuthAppInputSchema)
        ])
    })
    .strict()

export default OAuthCodeUpdateManyWithWhereWithoutOAuthAppInputSchema
