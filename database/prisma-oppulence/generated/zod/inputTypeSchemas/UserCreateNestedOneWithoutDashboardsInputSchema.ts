import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutDashboardsInputSchema } from './UserCreateWithoutDashboardsInputSchema'
import { UserUncheckedCreateWithoutDashboardsInputSchema } from './UserUncheckedCreateWithoutDashboardsInputSchema'
import { UserCreateOrConnectWithoutDashboardsInputSchema } from './UserCreateOrConnectWithoutDashboardsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutDashboardsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDashboardsInput> = z
    .object({
        create: z
            .union([z.lazy(() => UserCreateWithoutDashboardsInputSchema), z.lazy(() => UserUncheckedCreateWithoutDashboardsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDashboardsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutDashboardsInputSchema
