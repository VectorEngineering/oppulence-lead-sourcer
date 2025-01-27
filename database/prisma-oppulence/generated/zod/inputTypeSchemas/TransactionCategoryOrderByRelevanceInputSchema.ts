import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCategoryOrderByRelevanceFieldEnumSchema } from './TransactionCategoryOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionCategoryOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionCategoryOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => TransactionCategoryOrderByRelevanceFieldEnumSchema),
            z.lazy(() => TransactionCategoryOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default TransactionCategoryOrderByRelevanceInputSchema
