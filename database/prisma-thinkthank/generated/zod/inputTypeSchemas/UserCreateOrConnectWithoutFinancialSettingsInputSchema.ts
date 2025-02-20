import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserCreateWithoutFinancialSettingsInputSchema } from './UserCreateWithoutFinancialSettingsInputSchema'
import { UserUncheckedCreateWithoutFinancialSettingsInputSchema } from './UserUncheckedCreateWithoutFinancialSettingsInputSchema'

export const UserCreateOrConnectWithoutFinancialSettingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFinancialSettingsInput> = z
    .object({
        where: z.lazy(() => UserWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => UserCreateWithoutFinancialSettingsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutFinancialSettingsInputSchema)
        ])
    })
    .strict()

export default UserCreateOrConnectWithoutFinancialSettingsInputSchema
