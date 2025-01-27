import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadBudgetRevisionCountOrderByAggregateInputSchema } from './LeadBudgetRevisionCountOrderByAggregateInputSchema'
import { LeadBudgetRevisionAvgOrderByAggregateInputSchema } from './LeadBudgetRevisionAvgOrderByAggregateInputSchema'
import { LeadBudgetRevisionMaxOrderByAggregateInputSchema } from './LeadBudgetRevisionMaxOrderByAggregateInputSchema'
import { LeadBudgetRevisionMinOrderByAggregateInputSchema } from './LeadBudgetRevisionMinOrderByAggregateInputSchema'
import { LeadBudgetRevisionSumOrderByAggregateInputSchema } from './LeadBudgetRevisionSumOrderByAggregateInputSchema'

export const LeadBudgetRevisionOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadBudgetRevisionOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        budgetId: z.lazy(() => SortOrderSchema).optional(),
        previousAmount: z.lazy(() => SortOrderSchema).optional(),
        newAmount: z.lazy(() => SortOrderSchema).optional(),
        reason: z.lazy(() => SortOrderSchema).optional(),
        approvedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadBudgetRevisionCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => LeadBudgetRevisionAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadBudgetRevisionMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadBudgetRevisionMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => LeadBudgetRevisionSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadBudgetRevisionOrderByWithAggregationInputSchema
