import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutDealInputSchema } from './UserCreateWithoutDealInputSchema'
import { UserUncheckedCreateWithoutDealInputSchema } from './UserUncheckedCreateWithoutDealInputSchema'

export const UserCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDealInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([z.lazy(() => UserCreateWithoutDealInputSchema), z.lazy(() => UserUncheckedCreateWithoutDealInputSchema)])
    })
    .strict()

export default UserCreateOrConnectWithoutDealInputSchema
