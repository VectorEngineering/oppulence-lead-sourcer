import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutFinancialSettingsInputSchema } from './UserUpdateWithoutFinancialSettingsInputSchema'
import { UserUncheckedUpdateWithoutFinancialSettingsInputSchema } from './UserUncheckedUpdateWithoutFinancialSettingsInputSchema'
import { UserCreateWithoutFinancialSettingsInputSchema } from './UserCreateWithoutFinancialSettingsInputSchema'
import { UserUncheckedCreateWithoutFinancialSettingsInputSchema } from './UserUncheckedCreateWithoutFinancialSettingsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutFinancialSettingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutFinancialSettingsInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutFinancialSettingsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutFinancialSettingsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutFinancialSettingsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutFinancialSettingsInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutFinancialSettingsInputSchema
