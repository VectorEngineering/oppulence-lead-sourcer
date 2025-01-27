import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutReportAccessInputSchema } from './UserCreateWithoutReportAccessInputSchema'
import { UserUncheckedCreateWithoutReportAccessInputSchema } from './UserUncheckedCreateWithoutReportAccessInputSchema'

export const UserCreateOrConnectWithoutReportAccessInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReportAccessInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutReportAccessInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutReportAccessInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutReportAccessInputSchema
