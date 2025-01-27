import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutFinancialSettingsInputSchema } from './UserCreateWithoutFinancialSettingsInputSchema'
import { UserUncheckedCreateWithoutFinancialSettingsInputSchema } from './UserUncheckedCreateWithoutFinancialSettingsInputSchema'
import { UserCreateOrConnectWithoutFinancialSettingsInputSchema } from './UserCreateOrConnectWithoutFinancialSettingsInputSchema'
import { UserUpsertWithoutFinancialSettingsInputSchema } from './UserUpsertWithoutFinancialSettingsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutFinancialSettingsInputSchema } from './UserUpdateToOneWithWhereWithoutFinancialSettingsInputSchema'
import { UserUpdateWithoutFinancialSettingsInputSchema } from './UserUpdateWithoutFinancialSettingsInputSchema'
import { UserUncheckedUpdateWithoutFinancialSettingsInputSchema } from './UserUncheckedUpdateWithoutFinancialSettingsInputSchema'

export const UserUpdateOneRequiredWithoutFinancialSettingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFinancialSettingsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutFinancialSettingsInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutFinancialSettingsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFinancialSettingsInputSchema).optional(),
            upsert: z.lazy(() => UserUpsertWithoutFinancialSettingsInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => UserUpdateToOneWithWhereWithoutFinancialSettingsInputSchema),
                    z.lazy(() => UserUpdateWithoutFinancialSettingsInputSchema),
                    z.lazy(() => UserUncheckedUpdateWithoutFinancialSettingsInputSchema)
                ])
                .optional()
        })
        .strict()

export default UserUpdateOneRequiredWithoutFinancialSettingsNestedInputSchema
