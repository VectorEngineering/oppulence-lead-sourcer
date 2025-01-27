import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutLeadInputSchema } from './UserUpdateWithoutLeadInputSchema'
import { UserUncheckedUpdateWithoutLeadInputSchema } from './UserUncheckedUpdateWithoutLeadInputSchema'
import { UserCreateWithoutLeadInputSchema } from './UserCreateWithoutLeadInputSchema'
import { UserUncheckedCreateWithoutLeadInputSchema } from './UserUncheckedCreateWithoutLeadInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutLeadInputSchema: z.ZodType<Prisma.UserUpsertWithoutLeadInput> = z
    .object({
        update: z.union([z.lazy(() => UserUpdateWithoutLeadInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLeadInputSchema)]),
        create: z.union([z.lazy(() => UserCreateWithoutLeadInputSchema), z.lazy(() => UserUncheckedCreateWithoutLeadInputSchema)]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutLeadInputSchema
