import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadMetadataOrderByRelevanceFieldEnumSchema } from './LeadMetadataOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadMetadataOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadMetadataOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadMetadataOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadMetadataOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadMetadataOrderByRelevanceInputSchema
