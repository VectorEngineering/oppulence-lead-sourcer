import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionReconciliationMatchMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchMaxOrderByAggregateInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            transactionId: z.lazy(() => SortOrderSchema).optional(),
            matchedTransactionId: z.lazy(() => SortOrderSchema).optional(),
            confidence: z.lazy(() => SortOrderSchema).optional(),
            matchType: z.lazy(() => SortOrderSchema).optional(),
            status: z.lazy(() => SortOrderSchema).optional(),
            notes: z.lazy(() => SortOrderSchema).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional(),
            updatedAt: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default TransactionReconciliationMatchMaxOrderByAggregateInputSchema
