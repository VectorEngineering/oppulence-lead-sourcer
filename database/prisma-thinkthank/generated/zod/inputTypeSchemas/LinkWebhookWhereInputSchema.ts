import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { LinkRelationFilterSchema } from './LinkRelationFilterSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { WebhookRelationFilterSchema } from './WebhookRelationFilterSchema'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'

export const LinkWebhookWhereInputSchema: z.ZodType<Prisma.LinkWebhookWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => LinkWebhookWhereInputSchema), z.lazy(() => LinkWebhookWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => LinkWebhookWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => LinkWebhookWhereInputSchema), z.lazy(() => LinkWebhookWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        linkId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        webhookId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        link: z.union([z.lazy(() => LinkRelationFilterSchema), z.lazy(() => LinkWhereInputSchema)]).optional(),
        webhook: z.union([z.lazy(() => WebhookRelationFilterSchema), z.lazy(() => WebhookWhereInputSchema)]).optional()
    })
    .strict()

export default LinkWebhookWhereInputSchema
