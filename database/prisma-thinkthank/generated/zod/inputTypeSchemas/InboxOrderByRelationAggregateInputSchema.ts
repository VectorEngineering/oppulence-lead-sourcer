import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InboxOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InboxOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InboxOrderByRelationAggregateInputSchema
