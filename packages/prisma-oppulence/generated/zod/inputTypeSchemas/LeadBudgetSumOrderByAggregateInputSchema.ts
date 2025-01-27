import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetSumOrderByAggregateInput> = z
    .object({
        totalBudget: z.lazy(() => SortOrderSchema).optional(),
        allocatedBudget: z.lazy(() => SortOrderSchema).optional(),
        remainingBudget: z.lazy(() => SortOrderSchema).optional(),
        spentBudget: z.lazy(() => SortOrderSchema).optional(),
        productCost: z.lazy(() => SortOrderSchema).optional(),
        serviceCost: z.lazy(() => SortOrderSchema).optional(),
        implementationCost: z.lazy(() => SortOrderSchema).optional(),
        maintenanceCost: z.lazy(() => SortOrderSchema).optional(),
        fiscalYear: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadBudgetSumOrderByAggregateInputSchema
