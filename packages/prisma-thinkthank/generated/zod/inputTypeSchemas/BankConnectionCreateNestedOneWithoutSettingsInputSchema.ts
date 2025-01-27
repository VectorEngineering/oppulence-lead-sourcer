import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionCreateWithoutSettingsInputSchema } from './BankConnectionCreateWithoutSettingsInputSchema'
import { BankConnectionUncheckedCreateWithoutSettingsInputSchema } from './BankConnectionUncheckedCreateWithoutSettingsInputSchema'
import { BankConnectionCreateOrConnectWithoutSettingsInputSchema } from './BankConnectionCreateOrConnectWithoutSettingsInputSchema'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'

export const BankConnectionCreateNestedOneWithoutSettingsInputSchema: z.ZodType<Prisma.BankConnectionCreateNestedOneWithoutSettingsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankConnectionCreateWithoutSettingsInputSchema),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutSettingsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => BankConnectionCreateOrConnectWithoutSettingsInputSchema).optional(),
            connect: z.lazy(() => BankConnectionWhereUniqueInputSchema).optional()
        })
        .strict()

export default BankConnectionCreateNestedOneWithoutSettingsInputSchema
