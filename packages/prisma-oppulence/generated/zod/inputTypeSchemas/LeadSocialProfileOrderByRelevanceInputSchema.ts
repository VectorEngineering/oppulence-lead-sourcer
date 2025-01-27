import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSocialProfileOrderByRelevanceFieldEnumSchema } from './LeadSocialProfileOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSocialProfileOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadSocialProfileOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadSocialProfileOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadSocialProfileOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadSocialProfileOrderByRelevanceInputSchema
