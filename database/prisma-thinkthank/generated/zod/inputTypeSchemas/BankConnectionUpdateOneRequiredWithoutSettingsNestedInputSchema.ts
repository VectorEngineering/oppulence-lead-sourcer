import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionCreateWithoutSettingsInputSchema } from './BankConnectionCreateWithoutSettingsInputSchema'
import { BankConnectionUncheckedCreateWithoutSettingsInputSchema } from './BankConnectionUncheckedCreateWithoutSettingsInputSchema'
import { BankConnectionCreateOrConnectWithoutSettingsInputSchema } from './BankConnectionCreateOrConnectWithoutSettingsInputSchema'
import { BankConnectionUpsertWithoutSettingsInputSchema } from './BankConnectionUpsertWithoutSettingsInputSchema'
import { BankConnectionWhereUniqueInputSchema } from './BankConnectionWhereUniqueInputSchema'
import { BankConnectionUpdateToOneWithWhereWithoutSettingsInputSchema } from './BankConnectionUpdateToOneWithWhereWithoutSettingsInputSchema'
import { BankConnectionUpdateWithoutSettingsInputSchema } from './BankConnectionUpdateWithoutSettingsInputSchema'
import { BankConnectionUncheckedUpdateWithoutSettingsInputSchema } from './BankConnectionUncheckedUpdateWithoutSettingsInputSchema'

export const BankConnectionUpdateOneRequiredWithoutSettingsNestedInputSchema: z.ZodType<Prisma.BankConnectionUpdateOneRequiredWithoutSettingsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BankConnectionCreateWithoutSettingsInputSchema),
                    z.lazy(() => BankConnectionUncheckedCreateWithoutSettingsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => BankConnectionCreateOrConnectWithoutSettingsInputSchema).optional(),
            upsert: z.lazy(() => BankConnectionUpsertWithoutSettingsInputSchema).optional(),
            connect: z.lazy(() => BankConnectionWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => BankConnectionUpdateToOneWithWhereWithoutSettingsInputSchema),
                    z.lazy(() => BankConnectionUpdateWithoutSettingsInputSchema),
                    z.lazy(() => BankConnectionUncheckedUpdateWithoutSettingsInputSchema)
                ])
                .optional()
        })
        .strict()

export default BankConnectionUpdateOneRequiredWithoutSettingsNestedInputSchema
