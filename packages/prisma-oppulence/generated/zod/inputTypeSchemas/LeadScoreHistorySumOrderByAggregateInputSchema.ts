import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadScoreHistorySumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadScoreHistorySumOrderByAggregateInput> = z
    .object({
        previousScore: z.lazy(() => SortOrderSchema).optional(),
        newScore: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadScoreHistorySumOrderByAggregateInputSchema
