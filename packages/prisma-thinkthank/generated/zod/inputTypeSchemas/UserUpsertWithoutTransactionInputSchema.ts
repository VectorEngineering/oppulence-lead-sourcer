import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutTransactionInputSchema } from './UserUpdateWithoutTransactionInputSchema'
import { UserUncheckedUpdateWithoutTransactionInputSchema } from './UserUncheckedUpdateWithoutTransactionInputSchema'
import { UserCreateWithoutTransactionInputSchema } from './UserCreateWithoutTransactionInputSchema'
import { UserUncheckedCreateWithoutTransactionInputSchema } from './UserUncheckedCreateWithoutTransactionInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutTransactionInputSchema: z.ZodType<Prisma.UserUpsertWithoutTransactionInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutTransactionInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutTransactionInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutTransactionInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutTransactionInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutTransactionInputSchema
