import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutFinancialSettingsInputSchema } from './UserCreateWithoutFinancialSettingsInputSchema'
import { UserUncheckedCreateWithoutFinancialSettingsInputSchema } from './UserUncheckedCreateWithoutFinancialSettingsInputSchema'
import { UserCreateOrConnectWithoutFinancialSettingsInputSchema } from './UserCreateOrConnectWithoutFinancialSettingsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutFinancialSettingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFinancialSettingsInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => UserCreateWithoutFinancialSettingsInputSchema),
                z.lazy(() => UserUncheckedCreateWithoutFinancialSettingsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFinancialSettingsInputSchema).optional(),
        connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
    })
    .strict()

export default UserCreateNestedOneWithoutFinancialSettingsInputSchema
