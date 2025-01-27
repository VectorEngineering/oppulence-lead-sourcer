import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutIntegrationsInputSchema } from './UserCreateWithoutIntegrationsInputSchema'
import { UserUncheckedCreateWithoutIntegrationsInputSchema } from './UserUncheckedCreateWithoutIntegrationsInputSchema'

export const UserCreateOrConnectWithoutIntegrationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutIntegrationsInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutIntegrationsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutIntegrationsInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutIntegrationsInputSchema
