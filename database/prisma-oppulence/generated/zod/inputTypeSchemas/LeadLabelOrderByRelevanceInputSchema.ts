import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadLabelOrderByRelevanceFieldEnumSchema } from './LeadLabelOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadLabelOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadLabelOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadLabelOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadLabelOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadLabelOrderByRelevanceInputSchema
