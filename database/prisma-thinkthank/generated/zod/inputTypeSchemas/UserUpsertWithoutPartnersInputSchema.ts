import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutPartnersInputSchema } from './UserUpdateWithoutPartnersInputSchema'
import { UserUncheckedUpdateWithoutPartnersInputSchema } from './UserUncheckedUpdateWithoutPartnersInputSchema'
import { UserCreateWithoutPartnersInputSchema } from './UserCreateWithoutPartnersInputSchema'
import { UserUncheckedCreateWithoutPartnersInputSchema } from './UserUncheckedCreateWithoutPartnersInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutPartnersInputSchema: z.ZodType<Prisma.UserUpsertWithoutPartnersInput> = z
    .object({
        update: z.union([z.lazy(() => UserUpdateWithoutPartnersInputSchema), z.lazy(() => UserUncheckedUpdateWithoutPartnersInputSchema)]),
        create: z.union([z.lazy(() => UserCreateWithoutPartnersInputSchema), z.lazy(() => UserUncheckedCreateWithoutPartnersInputSchema)]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutPartnersInputSchema
