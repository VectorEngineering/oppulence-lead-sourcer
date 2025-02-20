import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutOAuthCodesInputSchema } from './UserUpdateWithoutOAuthCodesInputSchema'
import { UserUncheckedUpdateWithoutOAuthCodesInputSchema } from './UserUncheckedUpdateWithoutOAuthCodesInputSchema'
import { UserCreateWithoutOAuthCodesInputSchema } from './UserCreateWithoutOAuthCodesInputSchema'
import { UserUncheckedCreateWithoutOAuthCodesInputSchema } from './UserUncheckedCreateWithoutOAuthCodesInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutOAuthCodesInputSchema: z.ZodType<Prisma.UserUpsertWithoutOAuthCodesInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutOAuthCodesInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutOAuthCodesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutOAuthCodesInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutOAuthCodesInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutOAuthCodesInputSchema
