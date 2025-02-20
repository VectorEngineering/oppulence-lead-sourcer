import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { TransactionCommentCountOrderByAggregateInputSchema } from './TransactionCommentCountOrderByAggregateInputSchema'
import { TransactionCommentMaxOrderByAggregateInputSchema } from './TransactionCommentMaxOrderByAggregateInputSchema'
import { TransactionCommentMinOrderByAggregateInputSchema } from './TransactionCommentMinOrderByAggregateInputSchema'

export const TransactionCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionCommentOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        transactionId: z.lazy(() => SortOrderSchema).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        visibility: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => TransactionCommentCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => TransactionCommentMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => TransactionCommentMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default TransactionCommentOrderByWithAggregationInputSchema
