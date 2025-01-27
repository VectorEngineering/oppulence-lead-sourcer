import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadScoreHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadScoreHistoryOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadScoreHistoryOrderByRelationAggregateInputSchema
