import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookReceiverSchema } from './WebhookReceiverSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumWebhookReceiverFilterSchema } from './NestedEnumWebhookReceiverFilterSchema'

export const NestedEnumWebhookReceiverWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumWebhookReceiverWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => WebhookReceiverSchema).optional(),
        in: z
            .lazy(() => WebhookReceiverSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => WebhookReceiverSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => WebhookReceiverSchema), z.lazy(() => NestedEnumWebhookReceiverWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumWebhookReceiverFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumWebhookReceiverFilterSchema).optional()
    })
    .strict()

export default NestedEnumWebhookReceiverWithAggregatesFilterSchema
