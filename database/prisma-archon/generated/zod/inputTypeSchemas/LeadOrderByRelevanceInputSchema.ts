import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadOrderByRelevanceFieldEnumSchema } from './LeadOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadOrderByRelevanceInput> = z
    .object({
        fields: z.union([z.lazy(() => LeadOrderByRelevanceFieldEnumSchema), z.lazy(() => LeadOrderByRelevanceFieldEnumSchema).array()]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadOrderByRelevanceInputSchema
