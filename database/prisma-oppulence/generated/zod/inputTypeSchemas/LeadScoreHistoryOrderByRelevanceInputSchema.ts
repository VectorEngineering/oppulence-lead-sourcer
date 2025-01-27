import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoreHistoryOrderByRelevanceFieldEnumSchema } from './LeadScoreHistoryOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadScoreHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadScoreHistoryOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadScoreHistoryOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadScoreHistoryOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadScoreHistoryOrderByRelevanceInputSchema
