import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { WebhookUpdateOneRequiredWithoutLinksNestedInputSchema } from './WebhookUpdateOneRequiredWithoutLinksNestedInputSchema'

export const LinkWebhookUpdateWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookUpdateWithoutLinkInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        webhook: z.lazy(() => WebhookUpdateOneRequiredWithoutLinksNestedInputSchema).optional()
    })
    .strict()

export default LinkWebhookUpdateWithoutLinkInputSchema
