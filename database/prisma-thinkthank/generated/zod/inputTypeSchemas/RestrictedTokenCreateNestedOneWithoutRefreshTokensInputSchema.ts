import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { RestrictedTokenCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateWithoutRefreshTokensInputSchema'
import { RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema } from './RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema'
import { RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema } from './RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema'
import { RestrictedTokenWhereUniqueInputSchema } from './RestrictedTokenWhereUniqueInputSchema'

export const RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema: z.ZodType<Prisma.RestrictedTokenCreateNestedOneWithoutRefreshTokensInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RestrictedTokenCreateWithoutRefreshTokensInputSchema),
                    z.lazy(() => RestrictedTokenUncheckedCreateWithoutRefreshTokensInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => RestrictedTokenCreateOrConnectWithoutRefreshTokensInputSchema).optional(),
            connect: z.lazy(() => RestrictedTokenWhereUniqueInputSchema).optional()
        })
        .strict()

export default RestrictedTokenCreateNestedOneWithoutRefreshTokensInputSchema
