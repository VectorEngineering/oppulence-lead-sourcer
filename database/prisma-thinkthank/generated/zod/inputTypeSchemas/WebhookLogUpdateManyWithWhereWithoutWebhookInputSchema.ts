import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogScalarWhereInputSchema } from './WebhookLogScalarWhereInputSchema'
import { WebhookLogUpdateManyMutationInputSchema } from './WebhookLogUpdateManyMutationInputSchema'
import { WebhookLogUncheckedUpdateManyWithoutWebhookInputSchema } from './WebhookLogUncheckedUpdateManyWithoutWebhookInputSchema'

export const WebhookLogUpdateManyWithWhereWithoutWebhookInputSchema: z.ZodType<Prisma.WebhookLogUpdateManyWithWhereWithoutWebhookInput> = z
    .object({
        where: z.lazy(() => WebhookLogScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => WebhookLogUpdateManyMutationInputSchema),
            z.lazy(() => WebhookLogUncheckedUpdateManyWithoutWebhookInputSchema)
        ])
    })
    .strict()

export default WebhookLogUpdateManyWithWhereWithoutWebhookInputSchema
