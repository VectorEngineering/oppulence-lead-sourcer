import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetRevisionSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetRevisionSumOrderByAggregateInput> = z
    .object({
        previousAmount: z.lazy(() => SortOrderSchema).optional(),
        newAmount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadBudgetRevisionSumOrderByAggregateInputSchema
