import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookUpdateWithoutBankConnectionSettingsInputSchema } from './WebhookUpdateWithoutBankConnectionSettingsInputSchema'
import { WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema'
import { WebhookCreateWithoutBankConnectionSettingsInputSchema } from './WebhookCreateWithoutBankConnectionSettingsInputSchema'
import { WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema'

export const WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInput> =
    z
        .object({
            where: z.lazy(() => WebhookWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => WebhookUpdateWithoutBankConnectionSettingsInputSchema),
                z.lazy(() => WebhookUncheckedUpdateWithoutBankConnectionSettingsInputSchema)
            ]),
            create: z.union([
                z.lazy(() => WebhookCreateWithoutBankConnectionSettingsInputSchema),
                z.lazy(() => WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema)
            ])
        })
        .strict()

export default WebhookUpsertWithWhereUniqueWithoutBankConnectionSettingsInputSchema
