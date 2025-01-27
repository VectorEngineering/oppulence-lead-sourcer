import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutPartnersInputSchema } from './UserCreateWithoutPartnersInputSchema'
import { UserUncheckedCreateWithoutPartnersInputSchema } from './UserUncheckedCreateWithoutPartnersInputSchema'

export const UserCreateOrConnectWithoutPartnersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPartnersInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([z.lazy(() => UserCreateWithoutPartnersInputSchema), z.lazy(() => UserUncheckedCreateWithoutPartnersInputSchema)])
    })
    .strict()

export default UserCreateOrConnectWithoutPartnersInputSchema
