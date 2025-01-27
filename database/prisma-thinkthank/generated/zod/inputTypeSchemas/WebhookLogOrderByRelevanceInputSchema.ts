import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { WebhookLogOrderByRelevanceFieldEnumSchema } from './WebhookLogOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const WebhookLogOrderByRelevanceInputSchema: z.ZodType<Prisma.WebhookLogOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => WebhookLogOrderByRelevanceFieldEnumSchema),
            z.lazy(() => WebhookLogOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default WebhookLogOrderByRelevanceInputSchema
