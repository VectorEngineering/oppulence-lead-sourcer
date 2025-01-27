import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadBudgetExpenseCountOrderByAggregateInputSchema } from './LeadBudgetExpenseCountOrderByAggregateInputSchema'
import { LeadBudgetExpenseAvgOrderByAggregateInputSchema } from './LeadBudgetExpenseAvgOrderByAggregateInputSchema'
import { LeadBudgetExpenseMaxOrderByAggregateInputSchema } from './LeadBudgetExpenseMaxOrderByAggregateInputSchema'
import { LeadBudgetExpenseMinOrderByAggregateInputSchema } from './LeadBudgetExpenseMinOrderByAggregateInputSchema'
import { LeadBudgetExpenseSumOrderByAggregateInputSchema } from './LeadBudgetExpenseSumOrderByAggregateInputSchema'

export const LeadBudgetExpenseOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadBudgetExpenseOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        budgetId: z.lazy(() => SortOrderSchema).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        category: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        receipt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        expenseDate: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadBudgetExpenseCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => LeadBudgetExpenseAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadBudgetExpenseMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadBudgetExpenseMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => LeadBudgetExpenseSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadBudgetExpenseOrderByWithAggregationInputSchema
