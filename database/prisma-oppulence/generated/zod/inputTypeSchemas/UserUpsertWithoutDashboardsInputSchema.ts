import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutDashboardsInputSchema } from './UserUpdateWithoutDashboardsInputSchema'
import { UserUncheckedUpdateWithoutDashboardsInputSchema } from './UserUncheckedUpdateWithoutDashboardsInputSchema'
import { UserCreateWithoutDashboardsInputSchema } from './UserCreateWithoutDashboardsInputSchema'
import { UserUncheckedCreateWithoutDashboardsInputSchema } from './UserUncheckedCreateWithoutDashboardsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutDashboardsInputSchema: z.ZodType<Prisma.UserUpsertWithoutDashboardsInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutDashboardsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutDashboardsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutDashboardsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutDashboardsInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutDashboardsInputSchema
