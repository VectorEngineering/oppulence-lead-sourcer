import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutIntegrationsInputSchema } from './UserUpdateWithoutIntegrationsInputSchema'
import { UserUncheckedUpdateWithoutIntegrationsInputSchema } from './UserUncheckedUpdateWithoutIntegrationsInputSchema'

export const UserUpdateToOneWithWhereWithoutIntegrationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutIntegrationsInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutIntegrationsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutIntegrationsInputSchema)
        ])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutIntegrationsInputSchema
