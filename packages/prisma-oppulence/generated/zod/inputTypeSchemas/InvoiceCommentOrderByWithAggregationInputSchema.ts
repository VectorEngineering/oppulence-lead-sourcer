import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InvoiceCommentCountOrderByAggregateInputSchema } from './InvoiceCommentCountOrderByAggregateInputSchema'
import { InvoiceCommentAvgOrderByAggregateInputSchema } from './InvoiceCommentAvgOrderByAggregateInputSchema'
import { InvoiceCommentMaxOrderByAggregateInputSchema } from './InvoiceCommentMaxOrderByAggregateInputSchema'
import { InvoiceCommentMinOrderByAggregateInputSchema } from './InvoiceCommentMinOrderByAggregateInputSchema'
import { InvoiceCommentSumOrderByAggregateInputSchema } from './InvoiceCommentSumOrderByAggregateInputSchema'

export const InvoiceCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvoiceCommentOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        invoiceId: z.lazy(() => SortOrderSchema).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        visibility: z.lazy(() => SortOrderSchema).optional(),
        title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        priority: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        tags: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        attachments: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        mentions: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        formatting: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        parentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        threadPath: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        replyCount: z.lazy(() => SortOrderSchema).optional(),
        isEdited: z.lazy(() => SortOrderSchema).optional(),
        editedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastReplyAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        resolvedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        resolvedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        updatedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => InvoiceCommentCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => InvoiceCommentAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => InvoiceCommentMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => InvoiceCommentMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => InvoiceCommentSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default InvoiceCommentOrderByWithAggregationInputSchema
