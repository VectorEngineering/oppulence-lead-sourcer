import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookStatusSchema } from './WebhookStatusSchema'
import { NestedEnumWebhookStatusWithAggregatesFilterSchema } from './NestedEnumWebhookStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumWebhookStatusFilterSchema } from './NestedEnumWebhookStatusFilterSchema'

export const EnumWebhookStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumWebhookStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => WebhookStatusSchema).optional(),
        in: z
            .lazy(() => WebhookStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => WebhookStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => WebhookStatusSchema), z.lazy(() => NestedEnumWebhookStatusWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumWebhookStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumWebhookStatusFilterSchema).optional()
    })
    .strict()

export default EnumWebhookStatusWithAggregatesFilterSchema
