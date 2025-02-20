import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutDashboardsInputSchema } from './UserCreateWithoutDashboardsInputSchema'
import { UserUncheckedCreateWithoutDashboardsInputSchema } from './UserUncheckedCreateWithoutDashboardsInputSchema'

export const UserCreateOrConnectWithoutDashboardsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDashboardsInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutDashboardsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutDashboardsInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutDashboardsInputSchema
