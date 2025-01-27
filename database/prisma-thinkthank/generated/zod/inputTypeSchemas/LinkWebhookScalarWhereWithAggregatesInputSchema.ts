import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const LinkWebhookScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LinkWebhookScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LinkWebhookScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LinkWebhookScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LinkWebhookScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LinkWebhookScalarWhereWithAggregatesInputSchema),
                z.lazy(() => LinkWebhookScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        linkId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        webhookId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
    })
    .strict()

export default LinkWebhookScalarWhereWithAggregatesInputSchema
