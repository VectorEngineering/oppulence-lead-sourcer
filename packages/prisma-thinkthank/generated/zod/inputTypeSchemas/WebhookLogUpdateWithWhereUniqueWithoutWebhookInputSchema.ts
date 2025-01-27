import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogWhereUniqueInputSchema } from './WebhookLogWhereUniqueInputSchema'
import { WebhookLogUpdateWithoutWebhookInputSchema } from './WebhookLogUpdateWithoutWebhookInputSchema'
import { WebhookLogUncheckedUpdateWithoutWebhookInputSchema } from './WebhookLogUncheckedUpdateWithoutWebhookInputSchema'

export const WebhookLogUpdateWithWhereUniqueWithoutWebhookInputSchema: z.ZodType<Prisma.WebhookLogUpdateWithWhereUniqueWithoutWebhookInput> =
    z
        .object({
            where: z.lazy(() => WebhookLogWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => WebhookLogUpdateWithoutWebhookInputSchema),
                z.lazy(() => WebhookLogUncheckedUpdateWithoutWebhookInputSchema)
            ])
        })
        .strict()

export default WebhookLogUpdateWithWhereUniqueWithoutWebhookInputSchema
