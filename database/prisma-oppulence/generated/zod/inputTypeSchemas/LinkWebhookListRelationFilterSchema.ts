import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookWhereInputSchema } from './LinkWebhookWhereInputSchema'

export const LinkWebhookListRelationFilterSchema: z.ZodType<Prisma.LinkWebhookListRelationFilter> = z
    .object({
        every: z.lazy(() => LinkWebhookWhereInputSchema).optional(),
        some: z.lazy(() => LinkWebhookWhereInputSchema).optional(),
        none: z.lazy(() => LinkWebhookWhereInputSchema).optional()
    })
    .strict()

export default LinkWebhookListRelationFilterSchema
