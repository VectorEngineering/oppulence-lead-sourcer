import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetExpenseOrderByRelevanceFieldEnumSchema } from './LeadBudgetExpenseOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetExpenseOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadBudgetExpenseOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadBudgetExpenseOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadBudgetExpenseOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadBudgetExpenseOrderByRelevanceInputSchema
