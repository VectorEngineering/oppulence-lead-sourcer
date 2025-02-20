import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema'

export const WebhookNullableRelationFilterSchema: z.ZodType<Prisma.WebhookNullableRelationFilter> = z
    .object({
        is: z
            .lazy(() => WebhookWhereInputSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => WebhookWhereInputSchema)
            .optional()
            .nullable()
    })
    .strict()

export default WebhookNullableRelationFilterSchema
