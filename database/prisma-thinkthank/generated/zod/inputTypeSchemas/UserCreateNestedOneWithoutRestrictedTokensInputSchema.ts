import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutRestrictedTokensInputSchema } from './UserCreateWithoutRestrictedTokensInputSchema'
import { UserUncheckedCreateWithoutRestrictedTokensInputSchema } from './UserUncheckedCreateWithoutRestrictedTokensInputSchema'
import { UserCreateOrConnectWithoutRestrictedTokensInputSchema } from './UserCreateOrConnectWithoutRestrictedTokensInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutRestrictedTokensInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRestrictedTokensInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutRestrictedTokensInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutRestrictedTokensInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRestrictedTokensInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutRestrictedTokensInputSchema
