import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutLeadTaskInputSchema } from './UserUpdateWithoutLeadTaskInputSchema'
import { UserUncheckedUpdateWithoutLeadTaskInputSchema } from './UserUncheckedUpdateWithoutLeadTaskInputSchema'
import { UserCreateWithoutLeadTaskInputSchema } from './UserCreateWithoutLeadTaskInputSchema'
import { UserUncheckedCreateWithoutLeadTaskInputSchema } from './UserUncheckedCreateWithoutLeadTaskInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutLeadTaskInputSchema: z.ZodType<Prisma.UserUpsertWithoutLeadTaskInput> = z
    .object({
        update: z.union([z.lazy(() => UserUpdateWithoutLeadTaskInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLeadTaskInputSchema)]),
        create: z.union([z.lazy(() => UserCreateWithoutLeadTaskInputSchema), z.lazy(() => UserUncheckedCreateWithoutLeadTaskInputSchema)]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutLeadTaskInputSchema
