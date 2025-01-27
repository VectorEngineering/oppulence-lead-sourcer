import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutFinancialSettingsInputSchema } from './UserUpdateWithoutFinancialSettingsInputSchema'
import { UserUncheckedUpdateWithoutFinancialSettingsInputSchema } from './UserUncheckedUpdateWithoutFinancialSettingsInputSchema'

export const UserUpdateToOneWithWhereWithoutFinancialSettingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFinancialSettingsInput> =
    z
        .object({
            where: z.lazy(() => UserWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => UserUpdateWithoutFinancialSettingsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutFinancialSettingsInputSchema)
            ])
        })
        .strict()

export default UserUpdateToOneWithWhereWithoutFinancialSettingsInputSchema
