import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommentOrderByRelevanceFieldEnumSchema } from './LeadCommentOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCommentOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCommentOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadCommentOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadCommentOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadCommentOrderByRelevanceInputSchema
