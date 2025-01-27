import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LinkWebhookCountOrderByAggregateInputSchema } from './LinkWebhookCountOrderByAggregateInputSchema'
import { LinkWebhookMaxOrderByAggregateInputSchema } from './LinkWebhookMaxOrderByAggregateInputSchema'
import { LinkWebhookMinOrderByAggregateInputSchema } from './LinkWebhookMinOrderByAggregateInputSchema'

export const LinkWebhookOrderByWithAggregationInputSchema: z.ZodType<Prisma.LinkWebhookOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        linkId: z.lazy(() => SortOrderSchema).optional(),
        webhookId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LinkWebhookCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LinkWebhookMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LinkWebhookMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LinkWebhookOrderByWithAggregationInputSchema
