import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'

export const LinkWebhookUncheckedUpdateWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUncheckedUpdateWithoutLinkInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        webhookId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default LinkWebhookUncheckedUpdateWithoutLinkInputSchema
