import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BankConnectionSettingsWhereUniqueInputSchema } from './BankConnectionSettingsWhereUniqueInputSchema'
import { BankConnectionSettingsUpdateWithoutWebhooksInputSchema } from './BankConnectionSettingsUpdateWithoutWebhooksInputSchema'
import { BankConnectionSettingsUncheckedUpdateWithoutWebhooksInputSchema } from './BankConnectionSettingsUncheckedUpdateWithoutWebhooksInputSchema'

export const BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInputSchema: z.ZodType<Prisma.BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInput> =
    z
        .object({
            where: z.lazy(() => BankConnectionSettingsWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => BankConnectionSettingsUpdateWithoutWebhooksInputSchema),
                z.lazy(() => BankConnectionSettingsUncheckedUpdateWithoutWebhooksInputSchema)
            ])
        })
        .strict()

export default BankConnectionSettingsUpdateWithWhereUniqueWithoutWebhooksInputSchema
