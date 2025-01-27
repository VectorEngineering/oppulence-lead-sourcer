import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskOrderByRelevanceFieldEnumSchema } from './LeadTaskOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadTaskOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadTaskOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadTaskOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadTaskOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadTaskOrderByRelevanceInputSchema
