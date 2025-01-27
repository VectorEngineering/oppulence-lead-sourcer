import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema } from './LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema'
import { LinkWebhookWhereInputSchema } from './LinkWebhookWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { LinkRelationFilterSchema } from './LinkRelationFilterSchema'
import { LinkWhereInputSchema } from './LinkWhereInputSchema'
import { WebhookRelationFilterSchema } from './WebhookRelationFilterSchema'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'

export const LinkWebhookWhereUniqueInputSchema: z.ZodType<Prisma.LinkWebhookWhereUniqueInput> = z
    .union([
        z.object({
            id: z.string().cuid(),
            linkId_webhookId: z.lazy(() => LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema)
        }),
        z.object({
            id: z.string().cuid()
        }),
        z.object({
            linkId_webhookId: z.lazy(() => LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema)
        })
    ])
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                linkId_webhookId: z.lazy(() => LinkWebhookLinkIdWebhookIdCompoundUniqueInputSchema).optional(),
                AND: z.union([z.lazy(() => LinkWebhookWhereInputSchema), z.lazy(() => LinkWebhookWhereInputSchema).array()]).optional(),
                OR: z
                    .lazy(() => LinkWebhookWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z.union([z.lazy(() => LinkWebhookWhereInputSchema), z.lazy(() => LinkWebhookWhereInputSchema).array()]).optional(),
                linkId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                webhookId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                link: z.union([z.lazy(() => LinkRelationFilterSchema), z.lazy(() => LinkWhereInputSchema)]).optional(),
                webhook: z.union([z.lazy(() => WebhookRelationFilterSchema), z.lazy(() => WebhookWhereInputSchema)]).optional()
            })
            .strict()
    )

export default LinkWebhookWhereUniqueInputSchema
