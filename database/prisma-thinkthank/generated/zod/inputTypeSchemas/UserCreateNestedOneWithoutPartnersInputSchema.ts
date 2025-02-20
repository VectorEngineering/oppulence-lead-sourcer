import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutPartnersInputSchema } from './UserCreateWithoutPartnersInputSchema'
import { UserUncheckedCreateWithoutPartnersInputSchema } from './UserUncheckedCreateWithoutPartnersInputSchema'
import { UserCreateOrConnectWithoutPartnersInputSchema } from './UserCreateOrConnectWithoutPartnersInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutPartnersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPartnersInput> = z
    .object({
        create: z
            .union([z.lazy(() => UserCreateWithoutPartnersInputSchema), z.lazy(() => UserUncheckedCreateWithoutPartnersInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPartnersInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutPartnersInputSchema
