import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutRestrictedTokensInputSchema } from './UserUpdateWithoutRestrictedTokensInputSchema'
import { UserUncheckedUpdateWithoutRestrictedTokensInputSchema } from './UserUncheckedUpdateWithoutRestrictedTokensInputSchema'
import { UserCreateWithoutRestrictedTokensInputSchema } from './UserCreateWithoutRestrictedTokensInputSchema'
import { UserUncheckedCreateWithoutRestrictedTokensInputSchema } from './UserUncheckedCreateWithoutRestrictedTokensInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.UserUpsertWithoutRestrictedTokensInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutRestrictedTokensInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutRestrictedTokensInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutRestrictedTokensInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutRestrictedTokensInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutRestrictedTokensInputSchema
