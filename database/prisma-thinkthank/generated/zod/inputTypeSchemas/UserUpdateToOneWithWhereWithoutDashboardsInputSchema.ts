import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutDashboardsInputSchema } from './UserUpdateWithoutDashboardsInputSchema'
import { UserUncheckedUpdateWithoutDashboardsInputSchema } from './UserUncheckedUpdateWithoutDashboardsInputSchema'

export const UserUpdateToOneWithWhereWithoutDashboardsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDashboardsInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([z.lazy(() => UserUpdateWithoutDashboardsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutDashboardsInputSchema)])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutDashboardsInputSchema
