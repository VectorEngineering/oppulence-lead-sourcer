import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetRevisionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetRevisionAvgOrderByAggregateInput> = z
    .object({
        previousAmount: z.lazy(() => SortOrderSchema).optional(),
        newAmount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadBudgetRevisionAvgOrderByAggregateInputSchema
