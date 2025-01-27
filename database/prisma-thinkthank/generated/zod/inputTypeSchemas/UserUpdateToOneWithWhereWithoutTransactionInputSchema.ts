import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutTransactionInputSchema } from './UserUpdateWithoutTransactionInputSchema'
import { UserUncheckedUpdateWithoutTransactionInputSchema } from './UserUncheckedUpdateWithoutTransactionInputSchema'

export const UserUpdateToOneWithWhereWithoutTransactionInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTransactionInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutTransactionInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutTransactionInputSchema)
        ])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutTransactionInputSchema
