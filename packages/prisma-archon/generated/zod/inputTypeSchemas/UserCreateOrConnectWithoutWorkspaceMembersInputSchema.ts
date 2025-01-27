import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutWorkspaceMembersInputSchema } from './UserCreateWithoutWorkspaceMembersInputSchema'
import { UserUncheckedCreateWithoutWorkspaceMembersInputSchema } from './UserUncheckedCreateWithoutWorkspaceMembersInputSchema'

export const UserCreateOrConnectWithoutWorkspaceMembersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWorkspaceMembersInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutWorkspaceMembersInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutWorkspaceMembersInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutWorkspaceMembersInputSchema
