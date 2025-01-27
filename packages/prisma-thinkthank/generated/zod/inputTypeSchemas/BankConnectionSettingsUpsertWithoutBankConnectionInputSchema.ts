import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionSettingsUpdateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUpdateWithoutBankConnectionInputSchema'
import { BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema'
import { BankConnectionSettingsCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsCreateWithoutBankConnectionInputSchema'
import { BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema'
import { BankConnectionSettingsWhereInputSchema } from './BankConnectionSettingsWhereInputSchema'

export const BankConnectionSettingsUpsertWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpsertWithoutBankConnectionInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => BankConnectionSettingsUpdateWithoutBankConnectionInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutBankConnectionInputSchema)
            ]),
            create: z.union([
                z.lazy(() => BankConnectionSettingsCreateWithoutBankConnectionInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema)
            ]),
            where: z.lazy(() => BankConnectionSettingsWhereInputSchema).optional()
        })
        .strict()

export default BankConnectionSettingsUpsertWithoutBankConnectionInputSchema
