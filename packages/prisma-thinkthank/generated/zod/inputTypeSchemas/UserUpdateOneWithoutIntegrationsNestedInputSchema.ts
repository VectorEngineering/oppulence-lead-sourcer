import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutIntegrationsInputSchema } from './UserCreateWithoutIntegrationsInputSchema'
import { UserUncheckedCreateWithoutIntegrationsInputSchema } from './UserUncheckedCreateWithoutIntegrationsInputSchema'
import { UserCreateOrConnectWithoutIntegrationsInputSchema } from './UserCreateOrConnectWithoutIntegrationsInputSchema'
import { UserUpsertWithoutIntegrationsInputSchema } from './UserUpsertWithoutIntegrationsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutIntegrationsInputSchema } from './UserUpdateToOneWithWhereWithoutIntegrationsInputSchema'
import { UserUpdateWithoutIntegrationsInputSchema } from './UserUpdateWithoutIntegrationsInputSchema'
import { UserUncheckedUpdateWithoutIntegrationsInputSchema } from './UserUncheckedUpdateWithoutIntegrationsInputSchema'

export const UserUpdateOneWithoutIntegrationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutIntegrationsNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutIntegrationsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutIntegrationsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutIntegrationsInputSchema).optional(),
        upsert: z.lazy(() => UserUpsertWithoutIntegrationsInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => UserWhereInputSchema)]).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => UserUpdateToOneWithWhereWithoutIntegrationsInputSchema),
                z.lazy(() => UserUpdateWithoutIntegrationsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutIntegrationsInputSchema)
            ])
            .optional()
    })
    .strict()

export default UserUpdateOneWithoutIntegrationsNestedInputSchema
