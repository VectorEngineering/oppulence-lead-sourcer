import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { YearInReviewOrderByRelevanceFieldEnumSchema } from './YearInReviewOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const YearInReviewOrderByRelevanceInputSchema: z.ZodType<Prisma.YearInReviewOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => YearInReviewOrderByRelevanceFieldEnumSchema),
            z.lazy(() => YearInReviewOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default YearInReviewOrderByRelevanceInputSchema
