import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutDealTaskInputSchema } from './UserCreateWithoutDealTaskInputSchema'
import { UserUncheckedCreateWithoutDealTaskInputSchema } from './UserUncheckedCreateWithoutDealTaskInputSchema'
import { UserCreateOrConnectWithoutDealTaskInputSchema } from './UserCreateOrConnectWithoutDealTaskInputSchema'
import { UserUpsertWithoutDealTaskInputSchema } from './UserUpsertWithoutDealTaskInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutDealTaskInputSchema } from './UserUpdateToOneWithWhereWithoutDealTaskInputSchema'
import { UserUpdateWithoutDealTaskInputSchema } from './UserUpdateWithoutDealTaskInputSchema'
import { UserUncheckedUpdateWithoutDealTaskInputSchema } from './UserUncheckedUpdateWithoutDealTaskInputSchema'

export const UserUpdateOneWithoutDealTaskNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutDealTaskNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => UserCreateWithoutDealTaskInputSchema), z.lazy(() => UserUncheckedCreateWithoutDealTaskInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDealTaskInputSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutDealTaskInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutDealTaskInputSchema),
                z.lazy(() => UserUpdateWithoutDealTaskInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutDealTaskInputSchema)
            ])
            .optional()
    })
    .strict()

export default UserUpdateOneWithoutDealTaskNestedInputSchema
