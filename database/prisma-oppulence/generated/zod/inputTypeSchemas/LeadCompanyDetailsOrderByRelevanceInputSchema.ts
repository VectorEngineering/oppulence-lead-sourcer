import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompanyDetailsOrderByRelevanceFieldEnumSchema } from './LeadCompanyDetailsOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCompanyDetailsOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadCompanyDetailsOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadCompanyDetailsOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadCompanyDetailsOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadCompanyDetailsOrderByRelevanceInputSchema
