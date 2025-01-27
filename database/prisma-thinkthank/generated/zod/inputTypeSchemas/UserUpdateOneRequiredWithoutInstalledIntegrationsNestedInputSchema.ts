import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutInstalledIntegrationsInputSchema } from './UserCreateWithoutInstalledIntegrationsInputSchema'
import { UserUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedCreateWithoutInstalledIntegrationsInputSchema'
import { UserCreateOrConnectWithoutInstalledIntegrationsInputSchema } from './UserCreateOrConnectWithoutInstalledIntegrationsInputSchema'
import { UserUpsertWithoutInstalledIntegrationsInputSchema } from './UserUpsertWithoutInstalledIntegrationsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema } from './UserUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema'
import { UserUpdateWithoutInstalledIntegrationsInputSchema } from './UserUpdateWithoutInstalledIntegrationsInputSchema'
import { UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema'

export const UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutInstalledIntegrationsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInstalledIntegrationsInputSchema).optional(),
            upsert: z.lazy(() => UserUpsertWithoutInstalledIntegrationsInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => UserUpdateToOneWithWhereWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => UserUpdateWithoutInstalledIntegrationsInputSchema),
                    z.lazy(() => UserUncheckedUpdateWithoutInstalledIntegrationsInputSchema)
                ])
                .optional()
        })
        .strict()

export default UserUpdateOneRequiredWithoutInstalledIntegrationsNestedInputSchema
