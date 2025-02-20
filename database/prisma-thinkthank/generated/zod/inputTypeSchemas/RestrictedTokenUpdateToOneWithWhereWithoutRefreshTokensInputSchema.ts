import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema'
import { RestrictedTokenUpdateWithoutRefreshTokensInputSchema } from './RestrictedTokenUpdateWithoutRefreshTokensInputSchema'
import { RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema'

export const RestrictedTokenUpdateToOneWithWhereWithoutRefreshTokensInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateToOneWithWhereWithoutRefreshTokensInput> =
    z
        .object({
            where: z.lazy(() => RestrictedTokenWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => RestrictedTokenUpdateWithoutRefreshTokensInputSchema),
                z.lazy(() => RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema)
            ])
        })
        .strict()

export default RestrictedTokenUpdateToOneWithWhereWithoutRefreshTokensInputSchema
