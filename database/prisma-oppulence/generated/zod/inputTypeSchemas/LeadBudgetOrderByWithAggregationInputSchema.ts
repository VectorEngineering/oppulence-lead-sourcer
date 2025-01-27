import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadBudgetCountOrderByAggregateInputSchema } from './LeadBudgetCountOrderByAggregateInputSchema'
import { LeadBudgetAvgOrderByAggregateInputSchema } from './LeadBudgetAvgOrderByAggregateInputSchema'
import { LeadBudgetMaxOrderByAggregateInputSchema } from './LeadBudgetMaxOrderByAggregateInputSchema'
import { LeadBudgetMinOrderByAggregateInputSchema } from './LeadBudgetMinOrderByAggregateInputSchema'
import { LeadBudgetSumOrderByAggregateInputSchema } from './LeadBudgetSumOrderByAggregateInputSchema'

export const LeadBudgetOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadBudgetOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        totalBudget: z.lazy(() => SortOrderSchema).optional(),
        allocatedBudget: z.lazy(() => SortOrderSchema).optional(),
        remainingBudget: z.lazy(() => SortOrderSchema).optional(),
        spentBudget: z.lazy(() => SortOrderSchema).optional(),
        productCost: z.lazy(() => SortOrderSchema).optional(),
        serviceCost: z.lazy(() => SortOrderSchema).optional(),
        implementationCost: z.lazy(() => SortOrderSchema).optional(),
        maintenanceCost: z.lazy(() => SortOrderSchema).optional(),
        fiscalYear: z.lazy(() => SortOrderSchema).optional(),
        quarterlyBreakdown: z.lazy(() => SortOrderSchema).optional(),
        monthlyBreakdown: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        approvalStatus: z.lazy(() => SortOrderSchema).optional(),
        approvedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        approvedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadBudgetCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => LeadBudgetAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadBudgetMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadBudgetMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => LeadBudgetSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadBudgetOrderByWithAggregationInputSchema
