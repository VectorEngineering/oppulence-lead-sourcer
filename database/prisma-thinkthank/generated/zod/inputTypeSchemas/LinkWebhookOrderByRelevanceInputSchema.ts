import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkWebhookOrderByRelevanceFieldEnumSchema } from './LinkWebhookOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LinkWebhookOrderByRelevanceInputSchema: z.ZodType<Prisma.LinkWebhookOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LinkWebhookOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LinkWebhookOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LinkWebhookOrderByRelevanceInputSchema
