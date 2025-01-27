import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadFeedbackAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadFeedbackAvgOrderByAggregateInput> = z
    .object({
        score: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadFeedbackAvgOrderByAggregateInputSchema
