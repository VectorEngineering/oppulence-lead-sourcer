import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutWorkspacesInputSchema } from './UserUpdateWithoutWorkspacesInputSchema'
import { UserUncheckedUpdateWithoutWorkspacesInputSchema } from './UserUncheckedUpdateWithoutWorkspacesInputSchema'
import { UserCreateWithoutWorkspacesInputSchema } from './UserCreateWithoutWorkspacesInputSchema'
import { UserUncheckedCreateWithoutWorkspacesInputSchema } from './UserUncheckedCreateWithoutWorkspacesInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutWorkspacesInputSchema: z.ZodType<Prisma.UserUpsertWithoutWorkspacesInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutWorkspacesInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutWorkspacesInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutWorkspacesInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutWorkspacesInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutWorkspacesInputSchema
