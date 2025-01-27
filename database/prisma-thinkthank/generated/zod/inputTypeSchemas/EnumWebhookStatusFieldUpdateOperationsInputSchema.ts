import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookStatusSchema } from './WebhookStatusSchema'

export const EnumWebhookStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWebhookStatusFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => WebhookStatusSchema).optional()
    })
    .strict()

export default EnumWebhookStatusFieldUpdateOperationsInputSchema
