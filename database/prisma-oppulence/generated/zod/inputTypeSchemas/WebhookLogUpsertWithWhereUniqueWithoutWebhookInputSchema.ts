import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogWhereUniqueInputSchema } from './WebhookLogWhereUniqueInputSchema'
import { WebhookLogUpdateWithoutWebhookInputSchema } from './WebhookLogUpdateWithoutWebhookInputSchema'
import { WebhookLogUncheckedUpdateWithoutWebhookInputSchema } from './WebhookLogUncheckedUpdateWithoutWebhookInputSchema'
import { WebhookLogCreateWithoutWebhookInputSchema } from './WebhookLogCreateWithoutWebhookInputSchema'
import { WebhookLogUncheckedCreateWithoutWebhookInputSchema } from './WebhookLogUncheckedCreateWithoutWebhookInputSchema'

export const WebhookLogUpsertWithWhereUniqueWithoutWebhookInputSchema: z.ZodType<Prisma.WebhookLogUpsertWithWhereUniqueWithoutWebhookInput> =
    z
        .object({
            where: z.lazy(() => WebhookLogWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => WebhookLogUpdateWithoutWebhookInputSchema),
                z.lazy(() => WebhookLogUncheckedUpdateWithoutWebhookInputSchema)
            ]),
            create: z.union([
                z.lazy(() => WebhookLogCreateWithoutWebhookInputSchema),
                z.lazy(() => WebhookLogUncheckedCreateWithoutWebhookInputSchema)
            ])
        })
        .strict()

export default WebhookLogUpsertWithWhereUniqueWithoutWebhookInputSchema
