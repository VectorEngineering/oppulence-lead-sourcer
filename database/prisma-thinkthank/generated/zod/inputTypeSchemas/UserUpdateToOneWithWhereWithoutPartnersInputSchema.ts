import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutPartnersInputSchema } from './UserUpdateWithoutPartnersInputSchema'
import { UserUncheckedUpdateWithoutPartnersInputSchema } from './UserUncheckedUpdateWithoutPartnersInputSchema'

export const UserUpdateToOneWithWhereWithoutPartnersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPartnersInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([z.lazy(() => UserUpdateWithoutPartnersInputSchema), z.lazy(() => UserUncheckedUpdateWithoutPartnersInputSchema)])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutPartnersInputSchema
