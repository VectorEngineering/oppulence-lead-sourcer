import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutEndpointsInputSchema } from './UserUpdateWithoutEndpointsInputSchema'
import { UserUncheckedUpdateWithoutEndpointsInputSchema } from './UserUncheckedUpdateWithoutEndpointsInputSchema'
import { UserCreateWithoutEndpointsInputSchema } from './UserCreateWithoutEndpointsInputSchema'
import { UserUncheckedCreateWithoutEndpointsInputSchema } from './UserUncheckedCreateWithoutEndpointsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutEndpointsInputSchema: z.ZodType<Prisma.UserUpsertWithoutEndpointsInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutEndpointsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutEndpointsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutEndpointsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutEndpointsInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutEndpointsInputSchema
