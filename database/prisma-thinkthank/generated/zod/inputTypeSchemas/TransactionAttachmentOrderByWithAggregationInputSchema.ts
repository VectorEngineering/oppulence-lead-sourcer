import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { TransactionAttachmentCountOrderByAggregateInputSchema } from './TransactionAttachmentCountOrderByAggregateInputSchema'
import { TransactionAttachmentAvgOrderByAggregateInputSchema } from './TransactionAttachmentAvgOrderByAggregateInputSchema'
import { TransactionAttachmentMaxOrderByAggregateInputSchema } from './TransactionAttachmentMaxOrderByAggregateInputSchema'
import { TransactionAttachmentMinOrderByAggregateInputSchema } from './TransactionAttachmentMinOrderByAggregateInputSchema'
import { TransactionAttachmentSumOrderByAggregateInputSchema } from './TransactionAttachmentSumOrderByAggregateInputSchema'

export const TransactionAttachmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionAttachmentOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        transactionId: z.lazy(() => SortOrderSchema).optional(),
        name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        category: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        path: z.lazy(() => SortOrderSchema).optional(),
        size: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        mimeType: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        hash: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        isConfidential: z.lazy(() => SortOrderSchema).optional(),
        status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        processingErrors: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        ocrText: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        analysisResults: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        blob: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => TransactionAttachmentCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => TransactionAttachmentAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => TransactionAttachmentMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => TransactionAttachmentMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => TransactionAttachmentSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default TransactionAttachmentOrderByWithAggregationInputSchema
