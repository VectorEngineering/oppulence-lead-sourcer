import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadHistoryOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadHistoryOrderByRelationAggregateInputSchema
