import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogCreateManyWebhookInputSchema } from './WebhookLogCreateManyWebhookInputSchema'

export const WebhookLogCreateManyWebhookInputEnvelopeSchema: z.ZodType<Prisma.WebhookLogCreateManyWebhookInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => WebhookLogCreateManyWebhookInputSchema), z.lazy(() => WebhookLogCreateManyWebhookInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default WebhookLogCreateManyWebhookInputEnvelopeSchema
