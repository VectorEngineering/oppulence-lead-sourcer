import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema'
import { BankConnectionSettingsUpdateWithoutWebhooksInputSchema } from './BankConnectionSettingsUpdateWithoutWebhooksInputSchema'
import { BankConnectionSettingsUncheckedUpdateWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutWebhooksInputSchema'
import { BankConnectionSettingsCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsCreateWithoutWebhooksInputSchema'
import { BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema'

export const BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => BankConnectionSettingsUpdateWithoutWebhooksInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutWebhooksInputSchema)
            ]),
            create: z.union([
                z.lazy(() => BankConnectionSettingsCreateWithoutWebhooksInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedCreateWithoutWebhooksInputSchema)
            ])
        })
        .strict()

export default BankConnectionSettingsUpsertWithWhereUniqueWithoutWebhooksInputSchema
