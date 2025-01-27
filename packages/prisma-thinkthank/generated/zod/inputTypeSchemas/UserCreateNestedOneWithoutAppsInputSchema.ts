import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutAppsInputSchema } from './UserCreateWithoutAppsInputSchema'
import { UserUncheckedCreateWithoutAppsInputSchema } from './UserUncheckedCreateWithoutAppsInputSchema'
import { UserCreateOrConnectWithoutAppsInputSchema } from './UserCreateOrConnectWithoutAppsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutAppsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAppsInput> = z
    .object({
        create: z
            .union([z.lazy(() => UserCreateWithoutAppsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAppsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAppsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutAppsInputSchema
