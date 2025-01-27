import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutDealInputSchema } from './UserUpdateWithoutDealInputSchema'
import { UserUncheckedUpdateWithoutDealInputSchema } from './UserUncheckedUpdateWithoutDealInputSchema'
import { UserCreateWithoutDealInputSchema } from './UserCreateWithoutDealInputSchema'
import { UserUncheckedCreateWithoutDealInputSchema } from './UserUncheckedCreateWithoutDealInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutDealInputSchema: z.ZodType<Prisma.UserUpsertWithoutDealInput> = z
    .object({
        update: z.union([z.lazy(() => UserUpdateWithoutDealInputSchema), z.lazy(() => UserUncheckedUpdateWithoutDealInputSchema)]),
        create: z.union([z.lazy(() => UserCreateWithoutDealInputSchema), z.lazy(() => UserUncheckedCreateWithoutDealInputSchema)]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutDealInputSchema
