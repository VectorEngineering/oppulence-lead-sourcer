import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetExpenseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadBudgetExpenseOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadBudgetExpenseOrderByRelationAggregateInputSchema
