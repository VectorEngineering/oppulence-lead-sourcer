import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema'
import { BankConnectionSettingsCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsCreateWithoutBankConnectionInputSchema'
import { BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema'

export const BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema: z.ZodType<Prisma.BankConnectionSettingsCreateOrConnectWithoutBankConnectionInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => BankConnectionSettingsCreateWithoutBankConnectionInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutBankConnectionInputSchema)
            ])
        })
        .strict()

export default BankConnectionSettingsCreateOrConnectWithoutBankConnectionInputSchema
