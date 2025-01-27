import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutLeadInputSchema } from './UserUpdateWithoutLeadInputSchema'
import { UserUncheckedUpdateWithoutLeadInputSchema } from './UserUncheckedUpdateWithoutLeadInputSchema'

export const UserUpdateToOneWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLeadInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([z.lazy(() => UserUpdateWithoutLeadInputSchema), z.lazy(() => UserUncheckedUpdateWithoutLeadInputSchema)])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutLeadInputSchema
