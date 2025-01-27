import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutLeadInputSchema } from './UserCreateWithoutLeadInputSchema'
import { UserUncheckedCreateWithoutLeadInputSchema } from './UserUncheckedCreateWithoutLeadInputSchema'
import { UserCreateOrConnectWithoutLeadInputSchema } from './UserCreateOrConnectWithoutLeadInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutLeadInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLeadInput> = z
    .object({
        create: z
            .union([z.lazy(() => UserCreateWithoutLeadInputSchema), z.lazy(() => UserUncheckedCreateWithoutLeadInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLeadInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutLeadInputSchema
