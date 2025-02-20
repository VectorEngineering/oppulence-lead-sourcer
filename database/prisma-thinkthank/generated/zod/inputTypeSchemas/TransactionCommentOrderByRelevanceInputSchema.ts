import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionCommentOrderByRelevanceFieldEnumSchema } from './TransactionCommentOrderByRelevanceFieldEnumSchema'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionCommentOrderByRelevanceInputSchema: z.ZodType<Prisma.TransactionCommentOrderByRelevanceInput> = z
    .object({
        fields: z.union([
            z.lazy(() => TransactionCommentOrderByRelevanceFieldEnumSchema),
            z.lazy(() => TransactionCommentOrderByRelevanceFieldEnumSchema).array()
        ]),
        sort: z.lazy(() => SortOrderSchema),
        search: z.string()
    })
    .strict()

export default TransactionCommentOrderByRelevanceInputSchema
