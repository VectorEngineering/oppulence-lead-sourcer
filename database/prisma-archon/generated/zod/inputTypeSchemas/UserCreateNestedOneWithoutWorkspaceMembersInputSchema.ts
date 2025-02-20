import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutWorkspaceMembersInputSchema } from './UserCreateWithoutWorkspaceMembersInputSchema'
import { UserUncheckedCreateWithoutWorkspaceMembersInputSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInputSchema'
import { UserCreateOrConnectWithoutWorkspaceMembersInputSchema } from './UserCreateOrConnectWithoutWorkspaceMembersInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutWorkspaceMembersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWorkspaceMembersInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutWorkspaceMembersInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWorkspaceMembersInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutWorkspaceMembersInputSchema
