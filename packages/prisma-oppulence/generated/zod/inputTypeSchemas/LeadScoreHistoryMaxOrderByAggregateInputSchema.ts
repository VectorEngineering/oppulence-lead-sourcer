import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadScoreHistoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadScoreHistoryMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadScoreId: z.lazy(() => SortOrderSchema).optional(),
        previousScore: z.lazy(() => SortOrderSchema).optional(),
        newScore: z.lazy(() => SortOrderSchema).optional(),
        changeReason: z.lazy(() => SortOrderSchema).optional(),
        timestamp: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadScoreHistoryMaxOrderByAggregateInputSchema
