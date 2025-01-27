import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetRevisionCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetRevisionCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        budgetId: z.lazy(() => SortOrderSchema).optional(),
        previousAmount: z.lazy(() => SortOrderSchema).optional(),
        newAmount: z.lazy(() => SortOrderSchema).optional(),
        reason: z.lazy(() => SortOrderSchema).optional(),
        approvedBy: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadBudgetRevisionCountOrderByAggregateInputSchema
