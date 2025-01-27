import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetRevisionOrderByRelevanceFieldEnumSchema } from './LeadBudgetRevisionOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadBudgetRevisionOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadBudgetRevisionOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadBudgetRevisionOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadBudgetRevisionOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadBudgetRevisionOrderByRelevanceInputSchema
