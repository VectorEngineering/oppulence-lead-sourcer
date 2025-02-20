import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { TransactionReconciliationMatchCountOrderByAggregateInputSchema } from './TransactionReconciliationMatchCountOrderByAggregateInputSchema'
import { TransactionReconciliationMatchAvgOrderByAggregateInputSchema } from './TransactionReconciliationMatchAvgOrderByAggregateInputSchema'
import { TransactionReconciliationMatchMaxOrderByAggregateInputSchema } from './TransactionReconciliationMatchMaxOrderByAggregateInputSchema'
import { TransactionReconciliationMatchMinOrderByAggregateInputSchema } from './TransactionReconciliationMatchMinOrderByAggregateInputSchema'
import { TransactionReconciliationMatchSumOrderByAggregateInputSchema } from './TransactionReconciliationMatchSumOrderByAggregateInputSchema'

export const TransactionReconciliationMatchOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchOrderByWithAggregationInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            transactionId: z.lazy(() => SortOrderSchema).optional(),
            matchedTransactionId: z.lazy(() => SortOrderSchema).optional(),
            confidence: z.lazy(() => SortOrderSchema).optional(),
            matchType: z.lazy(() => SortOrderSchema).optional(),
            status: z.lazy(() => SortOrderSchema).optional(),
            notes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
            metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional(),
            updatedAt: z.lazy(() => SortOrderSchema).optional(),
            _count: z.lazy(() => TransactionReconciliationMatchCountOrderByAggregateInputSchema).optional(),
            _avg: z.lazy(() => TransactionReconciliationMatchAvgOrderByAggregateInputSchema).optional(),
            _max: z.lazy(() => TransactionReconciliationMatchMaxOrderByAggregateInputSchema).optional(),
            _min: z.lazy(() => TransactionReconciliationMatchMinOrderByAggregateInputSchema).optional(),
            _sum: z.lazy(() => TransactionReconciliationMatchSumOrderByAggregateInputSchema).optional()
        })
        .strict()

export default TransactionReconciliationMatchOrderByWithAggregationInputSchema
