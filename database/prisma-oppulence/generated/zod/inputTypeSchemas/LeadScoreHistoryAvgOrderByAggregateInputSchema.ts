import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadScoreHistoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadScoreHistoryAvgOrderByAggregateInput> = z
    .object({
        previousScore: z.lazy(() => SortOrderSchema).optional(),
        newScore: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadScoreHistoryAvgOrderByAggregateInputSchema
