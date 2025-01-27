import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetExpenseAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetExpenseAvgOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadBudgetExpenseAvgOrderByAggregateInputSchema
