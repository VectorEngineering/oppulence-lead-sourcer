import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LinkWebhookMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LinkWebhookMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        linkId: z.lazy(() => SortOrderSchema).optional(),
        webhookId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LinkWebhookMaxOrderByAggregateInputSchema
