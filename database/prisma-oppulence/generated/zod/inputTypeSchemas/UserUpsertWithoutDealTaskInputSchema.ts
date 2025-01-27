import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutDealTaskInputSchema } from './UserUpdateWithoutDealTaskInputSchema'
import { UserUncheckedUpdateWithoutDealTaskInputSchema } from './UserUncheckedUpdateWithoutDealTaskInputSchema'
import { UserCreateWithoutDealTaskInputSchema } from './UserCreateWithoutDealTaskInputSchema'
import { UserUncheckedCreateWithoutDealTaskInputSchema } from './UserUncheckedCreateWithoutDealTaskInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutDealTaskInputSchema: z.ZodType<Prisma.UserUpsertWithoutDealTaskInput> = z
    .object({
        update: z.union([z.lazy(() => UserUpdateWithoutDealTaskInputSchema), z.lazy(() => UserUncheckedUpdateWithoutDealTaskInputSchema)]),
        create: z.union([z.lazy(() => UserCreateWithoutDealTaskInputSchema), z.lazy(() => UserUncheckedCreateWithoutDealTaskInputSchema)]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutDealTaskInputSchema
