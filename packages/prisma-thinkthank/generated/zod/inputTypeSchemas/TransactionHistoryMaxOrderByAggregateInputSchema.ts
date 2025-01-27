import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionHistoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionHistoryMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        transactionId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default TransactionHistoryMaxOrderByAggregateInputSchema
