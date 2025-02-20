import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutRestrictedTokensInputSchema } from './UserCreateWithoutRestrictedTokensInputSchema'
import { UserUncheckedCreateWithoutRestrictedTokensInputSchema } from './UserUncheckedCreateWithoutRestrictedTokensInputSchema'

export const UserCreateOrConnectWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRestrictedTokensInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutRestrictedTokensInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutRestrictedTokensInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutRestrictedTokensInputSchema
