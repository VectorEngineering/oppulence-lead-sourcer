import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const WebhookLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WebhookLogOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default WebhookLogOrderByRelationAggregateInputSchema
