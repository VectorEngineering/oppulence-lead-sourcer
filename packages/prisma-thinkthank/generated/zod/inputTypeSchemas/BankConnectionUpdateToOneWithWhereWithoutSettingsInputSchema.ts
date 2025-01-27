import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema'
import { BankConnectionUpdateWithoutSettingsInputSchema } from './BankConnectionUpdateWithoutSettingsInputSchema'
import { BankConnectionUncheckedUpdateWithoutSettingsInputSchema } from './BankConnectionUncheckedUpdateWithoutSettingsInputSchema'

export const BankConnectionUpdateToOneWithWhereWithoutSettingsInputSchema: z.ZodType<Prisma.BankConnectionUpdateToOneWithWhereWithoutSettingsInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => BankConnectionUpdateWithoutSettingsInputSchema),
                z.lazy(() => BankConnectionUncheckedUpdateWithoutSettingsInputSchema)
            ])
        })
        .strict()

export default BankConnectionUpdateToOneWithWhereWithoutSettingsInputSchema
