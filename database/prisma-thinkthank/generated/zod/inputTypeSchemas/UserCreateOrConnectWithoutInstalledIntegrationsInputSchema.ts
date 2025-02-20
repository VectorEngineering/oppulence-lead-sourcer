import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutInstalledIntegrationsInputSchema } from './UserCreateWithoutInstalledIntegrationsInputSchema'
import { UserUncheckedCreateWithoutInstalledIntegrationsInputSchema } from './UserUncheckedCreateWithoutInstalledIntegrationsInputSchema'

export const UserCreateOrConnectWithoutInstalledIntegrationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInstalledIntegrationsInput> =
    z
        .object({
            where: z.lazy(() => UserWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => UserCreateWithoutInstalledIntegrationsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutInstalledIntegrationsInputSchema)
            ])
        })
        .strict()

export default UserCreateOrConnectWithoutInstalledIntegrationsInputSchema
