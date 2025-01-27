import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutAppsInputSchema } from './UserUpdateWithoutAppsInputSchema'
import { UserUncheckedUpdateWithoutAppsInputSchema } from './UserUncheckedUpdateWithoutAppsInputSchema'

export const UserUpdateToOneWithWhereWithoutAppsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAppsInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([z.lazy(() => UserUpdateWithoutAppsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAppsInputSchema)])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutAppsInputSchema
