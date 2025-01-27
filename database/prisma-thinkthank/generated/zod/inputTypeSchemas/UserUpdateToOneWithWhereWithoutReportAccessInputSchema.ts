import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutReportAccessInputSchema } from './UserUpdateWithoutReportAccessInputSchema'
import { UserUncheckedUpdateWithoutReportAccessInputSchema } from './UserUncheckedUpdateWithoutReportAccessInputSchema'

export const UserUpdateToOneWithWhereWithoutReportAccessInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReportAccessInput> = z
    .object({
        where: z.lazy(() => UserWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => UserUpdateWithoutReportAccessInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutReportAccessInputSchema)
        ])
    })
    .strict()

export default UserUpdateToOneWithWhereWithoutReportAccessInputSchema
