import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionHistoryOrderByRelevanceFieldEnumSchema } from './TransactionHistoryOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionHistoryOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionHistoryOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => TransactionHistoryOrderByRelevanceFieldEnumSchema),
            z.lazy(() => TransactionHistoryOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default TransactionHistoryOrderByRelevanceInputSchema
