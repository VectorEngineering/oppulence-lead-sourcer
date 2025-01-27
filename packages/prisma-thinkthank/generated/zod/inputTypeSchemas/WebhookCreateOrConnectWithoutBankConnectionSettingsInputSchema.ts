import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereUniqueInputSchema } from './WebhookWhereUniqueInputSchema'
import { WebhookCreateWithoutBankConnectionSettingsInputSchema } from './WebhookCreateWithoutBankConnectionSettingsInputSchema'
import { WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema } from './WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema'

export const WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema: z.ZodType<Prisma.WebhookCreateOrConnectWithoutBankConnectionSettingsInput> =
    z
        .object({
            where: z.lazy(() => WebhookWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => WebhookCreateWithoutBankConnectionSettingsInputSchema),
                z.lazy(() => WebhookUncheckedCreateWithoutBankConnectionSettingsInputSchema)
            ])
        })
        .strict()

export default WebhookCreateOrConnectWithoutBankConnectionSettingsInputSchema
