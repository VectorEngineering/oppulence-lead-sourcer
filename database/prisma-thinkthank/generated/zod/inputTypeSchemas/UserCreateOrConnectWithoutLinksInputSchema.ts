import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutLinksInputSchema } from './UserCreateWithoutLinksInputSchema'
import { UserUncheckedCreateWithoutLinksInputSchema } from './UserUncheckedCreateWithoutLinksInputSchema'

export const UserCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLinksInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([z.lazy(() => UserCreateWithoutLinksInputSchema), z.lazy(() => UserUncheckedCreateWithoutLinksInputSchema)])
    })
    .strict()

export default UserCreateOrConnectWithoutLinksInputSchema
