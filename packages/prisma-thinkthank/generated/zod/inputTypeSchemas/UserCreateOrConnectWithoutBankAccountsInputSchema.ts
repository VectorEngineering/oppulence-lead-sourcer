import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutBankAccountsInputSchema } from './UserCreateWithoutBankAccountsInputSchema'
import { UserUncheckedCreateWithoutBankAccountsInputSchema } from './UserUncheckedCreateWithoutBankAccountsInputSchema'

export const UserCreateOrConnectWithoutBankAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBankAccountsInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutBankAccountsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutBankAccountsInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutBankAccountsInputSchema
