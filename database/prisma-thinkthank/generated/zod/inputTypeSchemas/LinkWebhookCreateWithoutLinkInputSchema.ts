import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookCreateNestedOneWithoutLinksInputSchema } from './WebhookCreateNestedOneWithoutLinksInputSchema'

export const LinkWebhookCreateWithoutLinkInputSchema: z.ZodType<Prisma.LinkWebhookCreateWithoutLinkInput> = z
    .object({
        id: z.string().cuid().optional(),
        webhook: z.lazy(() => WebhookCreateNestedOneWithoutLinksInputSchema)
    })
    .strict()

export default LinkWebhookCreateWithoutLinkInputSchema
