import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionSumOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionSumOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional(),
        baseAmount: z.lazy(() => SortOrderSchema).optional(),
        balance: z.lazy(() => SortOrderSchema).optional(),
        exchangeRate: z.lazy(() => SortOrderSchema).optional(),
        fees: z.lazy(() => SortOrderSchema).optional(),
        tax: z.lazy(() => SortOrderSchema).optional(),
        taxRate: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default TransactionSumOrderByAggregateInputSchema
