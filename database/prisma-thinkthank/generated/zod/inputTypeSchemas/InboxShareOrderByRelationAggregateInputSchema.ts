import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InboxShareOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InboxShareOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InboxShareOrderByRelationAggregateInputSchema
