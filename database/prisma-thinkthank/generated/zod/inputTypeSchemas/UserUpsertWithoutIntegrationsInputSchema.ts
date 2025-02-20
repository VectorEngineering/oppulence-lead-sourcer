import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutIntegrationsInputSchema } from './UserUpdateWithoutIntegrationsInputSchema'
import { UserUncheckedUpdateWithoutIntegrationsInputSchema } from './UserUncheckedUpdateWithoutIntegrationsInputSchema'
import { UserCreateWithoutIntegrationsInputSchema } from './UserCreateWithoutIntegrationsInputSchema'
import { UserUncheckedCreateWithoutIntegrationsInputSchema } from './UserUncheckedCreateWithoutIntegrationsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutIntegrationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutIntegrationsInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutIntegrationsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutIntegrationsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutIntegrationsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutIntegrationsInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutIntegrationsInputSchema
