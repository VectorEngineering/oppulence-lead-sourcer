import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRequirementOrderByRelevanceFieldEnumSchema } from './LeadRequirementOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadRequirementOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadRequirementOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadRequirementOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadRequirementOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadRequirementOrderByRelevanceInputSchema
