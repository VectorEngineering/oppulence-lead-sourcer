import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutRestrictedTokensInputSchema } from './UserCreateWithoutRestrictedTokensInputSchema'
import { UserUncheckedCreateWithoutRestrictedTokensInputSchema } from './UserUncheckedCreateWithoutRestrictedTokensInputSchema'
import { UserCreateOrConnectWithoutRestrictedTokensInputSchema } from './UserCreateOrConnectWithoutRestrictedTokensInputSchema'
import { UserUpsertWithoutRestrictedTokensInputSchema } from './UserUpsertWithoutRestrictedTokensInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutRestrictedTokensInputSchema } from './UserUpdateToOneWithWhereWithoutRestrictedTokensInputSchema'
import { UserUpdateWithoutRestrictedTokensInputSchema } from './UserUpdateWithoutRestrictedTokensInputSchema'
import { UserUncheckedUpdateWithoutRestrictedTokensInputSchema } from './UserUncheckedUpdateWithoutRestrictedTokensInputSchema'

export const UserUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRestrictedTokensNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutRestrictedTokensInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutRestrictedTokensInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRestrictedTokensInputSchema).optional(),
            upsert: z.lazy(() => UserUpsertWithoutRestrictedTokensInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => UserUpdateToOneWithWhereWithoutRestrictedTokensInputSchema),
                    z.lazy(() => UserUpdateWithoutRestrictedTokensInputSchema),
                    z.lazy(() => UserUncheckedUpdateWithoutRestrictedTokensInputSchema)
                ])
                .optional()
        })
        .strict()

export default UserUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema
