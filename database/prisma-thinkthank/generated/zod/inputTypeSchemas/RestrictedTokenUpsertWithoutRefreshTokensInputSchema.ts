import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenUpdateWithoutRefreshTokensInputSchema } from './RestrictedTokenUpdateWithoutRefreshTokensInputSchema'
import { RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema'
import { RestrictedTokenCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateWithoutRefreshTokensInputSchema'
import { RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema'
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema'

export const RestrictedTokenUpsertWithoutRefreshTokensInputSchema: z.ZodType<Prisma.RestrictedTokenUpsertWithoutRefreshTokensInput> = z
    .object({
        update: z.union([
            z.lazy(() => RestrictedTokenUpdateWithoutRefreshTokensInputSchema),
            z.lazy(() => RestrictedTokenUncheckedUpdateWithoutRefreshTokensInputSchema)
        ]),
        create: z.union([
            z.lazy(() => RestrictedTokenCreateWithoutRefreshTokensInputSchema),
            z.lazy(() => RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema)
        ]),
        where: z.lazy(() => RestrictedTokenWhereInputSchema).optional()
    })
    .strict()

export default RestrictedTokenUpsertWithoutRefreshTokensInputSchema
