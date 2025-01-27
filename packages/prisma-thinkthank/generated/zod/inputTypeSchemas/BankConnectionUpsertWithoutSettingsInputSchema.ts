import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionUpdateWithoutSettingsInputSchema } from './BankConnectionUpdateWithoutSettingsInputSchema'
import { BankConnectionUncheckedUpdateWithoutSettingsInputSchema } from './BankConnectionUncheckedUpdateWithoutSettingsInputSchema'
import { BankConnectionCreateWithoutSettingsInputSchema } from './BankConnectionCreateWithoutSettingsInputSchema'
import { BankConnectionUncheckedCreateWithoutSettingsInputSchema } from './BankConnectionUncheckedCreateWithoutSettingsInputSchema'
import { BankConnectionWhereInputSchema } from './BankConnectionWhereInputSchema'

export const BankConnectionUpsertWithoutSettingsInputSchema: z.ZodType<Prisma.BankConnectionUpsertWithoutSettingsInput> = z
    .object({
        update: z.union([
            z.lazy(() => BankConnectionUpdateWithoutSettingsInputSchema),
            z.lazy(() => BankConnectionUncheckedUpdateWithoutSettingsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => BankConnectionCreateWithoutSettingsInputSchema),
            z.lazy(() => BankConnectionUncheckedCreateWithoutSettingsInputSchema)
        ]),
        where: z.lazy(() => BankConnectionWhereInputSchema).optional()
    })
    .strict()

export default BankConnectionUpsertWithoutSettingsInputSchema
