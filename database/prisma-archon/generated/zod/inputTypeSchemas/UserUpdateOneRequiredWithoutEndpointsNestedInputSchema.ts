import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutEndpointsInputSchema } from './UserCreateWithoutEndpointsInputSchema'
import { UserUncheckedCreateWithoutEndpointsInputSchema } from './UserUncheckedCreateWithoutEndpointsInputSchema'
import { UserCreateOrConnectWithoutEndpointsInputSchema } from './UserCreateOrConnectWithoutEndpointsInputSchema'
import { UserUpsertWithoutEndpointsInputSchema } from './UserUpsertWithoutEndpointsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutEndpointsInputSchema } from './UserUpdateToOneWithWhereWithoutEndpointsInputSchema'
import { UserUpdateWithoutEndpointsInputSchema } from './UserUpdateWithoutEndpointsInputSchema'
import { UserUncheckedUpdateWithoutEndpointsInputSchema } from './UserUncheckedUpdateWithoutEndpointsInputSchema'

export const UserUpdateOneRequiredWithoutEndpointsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEndpointsNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => UserCreateWithoutEndpointsInputSchema), z.lazy(() => UserUncheckedCreateWithoutEndpointsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEndpointsInputSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutEndpointsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutEndpointsInputSchema),
                z.lazy(() => UserUpdateWithoutEndpointsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutEndpointsInputSchema)
            ])
            .optional()
    })
    .strict()

export default UserUpdateOneRequiredWithoutEndpointsNestedInputSchema
