import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema'
import { BankConnectionSettingsUpdateWithoutCreatorInputSchema } from './BankConnectionSettingsUpdateWithoutCreatorInputSchema'
import { BankConnectionSettingsUncheckedUpdateWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutCreatorInputSchema'
import { BankConnectionSettingsCreateWithoutCreatorInputSchema } from './BankConnectionSettingsCreateWithoutCreatorInputSchema'
import { BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema'

export const BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => BankConnectionSettingsUpdateWithoutCreatorInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutCreatorInputSchema)
            ]),
            create: z.union([
                z.lazy(() => BankConnectionSettingsCreateWithoutCreatorInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutCreatorInputSchema)
            ])
        })
        .strict()

export default BankConnectionSettingsUpsertWithWhereUniqueWithoutCreatorInputSchema
