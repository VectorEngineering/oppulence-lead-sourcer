import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutBankAccountsInputSchema } from './UserUpdateWithoutBankAccountsInputSchema'
import { UserUncheckedUpdateWithoutBankAccountsInputSchema } from './UserUncheckedUpdateWithoutBankAccountsInputSchema'
import { UserCreateWithoutBankAccountsInputSchema } from './UserCreateWithoutBankAccountsInputSchema'
import { UserUncheckedCreateWithoutBankAccountsInputSchema } from './UserUncheckedCreateWithoutBankAccountsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutBankAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutBankAccountsInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutBankAccountsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutBankAccountsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutBankAccountsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutBankAccountsInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutBankAccountsInputSchema
