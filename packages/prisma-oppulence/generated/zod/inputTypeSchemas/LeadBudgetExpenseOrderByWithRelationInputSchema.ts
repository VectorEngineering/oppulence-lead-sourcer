import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadBudgetOrderByWithRelationInputSchema } from './LeadBudgetOrderByWithRelationInputSchema'
import { LeadBudgetExpenseOrderByRelevanceInputSchema } from './LeadBudgetExpenseOrderByRelevanceInputSchema'

export const LeadBudgetExpenseOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadBudgetExpenseOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        budgetId: z.lazy(() => SortOrderSchema).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        category: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        receipt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        expenseDate: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        budget: z.lazy(() => LeadBudgetOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadBudgetExpenseOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadBudgetExpenseOrderByWithRelationInputSchema
