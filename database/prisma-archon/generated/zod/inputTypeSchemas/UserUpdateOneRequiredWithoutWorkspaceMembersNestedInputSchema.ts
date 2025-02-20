import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutWorkspaceMembersInputSchema } from './UserCreateWithoutWorkspaceMembersInputSchema'
import { UserUncheckedCreateWithoutWorkspaceMembersInputSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInputSchema'
import { UserCreateOrConnectWithoutWorkspaceMembersInputSchema } from './UserCreateOrConnectWithoutWorkspaceMembersInputSchema'
import { UserUpsertWithoutWorkspaceMembersInputSchema } from './UserUpsertWithoutWorkspaceMembersInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutWorkspaceMembersInputSchema } from './UserUpdateToOneWithWhereWithoutWorkspaceMembersInputSchema'
import { UserUpdateWithoutWorkspaceMembersInputSchema } from './UserUpdateWithoutWorkspaceMembersInputSchema'
import { UserUncheckedUpdateWithoutWorkspaceMembersInputSchema } from './UserUncheckedUpdateWithoutWorkspaceMembersInputSchema'

export const UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWorkspaceMembersNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutWorkspaceMembersInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceMembersInputSchema).optional(),
            upsert: z.lazy(() => UserUpsertWithoutWorkspaceMembersInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => UserUpdateToOneWithWhereWithoutWorkspaceMembersInputSchema),
                    z.lazy(() => UserUpdateWithoutWorkspaceMembersInputSchema),
                    z.lazy(() => UserUncheckedUpdateWithoutWorkspaceMembersInputSchema)
                ])
                .optional()
        })
        .strict()

export default UserUpdateOneRequiredWithoutWorkspaceMembersNestedInputSchema
