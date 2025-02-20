import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutLinksInputSchema } from './UserUpdateWithoutLinksInputSchema'
import { UserUncheckedUpdateWithoutLinksInputSchema } from './UserUncheckedUpdateWithoutLinksInputSchema'
import { UserCreateWithoutLinksInputSchema } from './UserCreateWithoutLinksInputSchema'
import { UserUncheckedCreateWithoutLinksInputSchema } from './UserUncheckedCreateWithoutLinksInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutLinksInputSchema: z.ZodType<Prisma.UserUpsertWithoutLinksInput> = z
    .object({
        update: z.union([z.lazy(() => UserUpdateWithoutLinksInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLinksInputSchema)]),
        create: z.union([z.lazy(() => UserCreateWithoutLinksInputSchema), z.lazy(() => UserUncheckedCreateWithoutLinksInputSchema)]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutLinksInputSchema
