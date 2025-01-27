import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionCreateWithoutSettingsInputSchema } from './BankConnectionCreateWithoutSettingsInputSchema'
import { BankConnectionUncheckedCreateWithoutSettingsInputSchema } from './BankConnectionUncheckedCreateWithoutSettingsInputSchema'

export const BankConnectionCreateOrConnectWithoutSettingsInputSchema: z.ZodType<Prisma.BankConnectionCreateOrConnectWithoutSettingsInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => BankConnectionCreateWithoutSettingsInputSchema),
                z.lazy(() => BankConnectionUncheckedCreateWithoutSettingsInputSchema)
            ])
        })
        .strict()

export default BankConnectionCreateOrConnectWithoutSettingsInputSchema
