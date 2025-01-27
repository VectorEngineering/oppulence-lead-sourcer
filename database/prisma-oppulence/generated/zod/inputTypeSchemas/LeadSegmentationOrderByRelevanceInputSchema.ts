import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationOrderByRelevanceFieldEnumSchema } from './LeadSegmentationOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSegmentationOrderByRelevanceInputSchema: z.ZodType<Prisma.LeadSegmentationOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => LeadSegmentationOrderByRelevanceFieldEnumSchema),
            z.lazy(() => LeadSegmentationOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default LeadSegmentationOrderByRelevanceInputSchema
