import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'

export const WebhookRelationFilterSchema: z.ZodType<Prisma.WebhookRelationFilter> = z
    .object({
        is: z.lazy(() => WebhookWhereInputSchema).optional(),
        isNot: z.lazy(() => WebhookWhereInputSchema).optional()
    })
    .strict()

export default WebhookRelationFilterSchema
