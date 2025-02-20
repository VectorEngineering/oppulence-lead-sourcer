import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookReceiverSchema } from './WebhookReceiverSchema'

export const EnumWebhookReceiverFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWebhookReceiverFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => WebhookReceiverSchema).optional()
    })
    .strict()

export default EnumWebhookReceiverFieldUpdateOperationsInputSchema
