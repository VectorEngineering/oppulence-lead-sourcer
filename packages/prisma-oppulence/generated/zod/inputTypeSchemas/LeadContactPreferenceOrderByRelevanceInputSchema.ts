import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadContactPreferenceOrderByRelevanceFieldEnumSchema } from './LeadContactPreferenceOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadContactPreferenceOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadContactPreferenceOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadContactPreferenceOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadContactPreferenceOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadContactPreferenceOrderByRelevanceInputSchema
