import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionOrderByRelevanceFieldEnumSchema } from './TransactionOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => TransactionOrderByRelevanceFieldEnumSchema),
            z.lazy(() => TransactionOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default TransactionOrderByRelevanceInputSchema
