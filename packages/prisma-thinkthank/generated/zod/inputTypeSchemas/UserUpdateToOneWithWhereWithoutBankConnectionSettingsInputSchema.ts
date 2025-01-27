import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutBankConnectionSettingsInputSchema } from './UserUpdateWithoutBankConnectionSettingsInputSchema'
import { UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema } from './UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema'

export const UserUpdateToOneWithWhereWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBankConnectionSettingsInput> =
    z
        .object({
            where: z.lazy(() => UserWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => UserUpdateWithoutBankConnectionSettingsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutBankConnectionSettingsInputSchema)
            ])
        })
        .strict()

export default UserUpdateToOneWithWhereWithoutBankConnectionSettingsInputSchema
