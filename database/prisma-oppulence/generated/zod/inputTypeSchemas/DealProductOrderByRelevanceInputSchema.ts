import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealProductOrderByRelevanceFieldEnumSchema } from './DealProductOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const DealProductOrderByRelevanceInputSchema: z.ZodType<Prisma.DealProductOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => DealProductOrderByRelevanceFieldEnumSchema),
            z.lazy(() => DealProductOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default DealProductOrderByRelevanceInputSchema
