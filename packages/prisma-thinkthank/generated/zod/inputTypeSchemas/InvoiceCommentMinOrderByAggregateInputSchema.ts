import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceCommentMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceCommentMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        invoiceId: z.lazy(() => SortOrderSchema).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        visibility: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        parentId: z.lazy(() => SortOrderSchema).optional(),
        threadPath: z.lazy(() => SortOrderSchema).optional(),
        replyCount: z.lazy(() => SortOrderSchema).optional(),
        isEdited: z.lazy(() => SortOrderSchema).optional(),
        editedAt: z.lazy(() => SortOrderSchema).optional(),
        lastReplyAt: z.lazy(() => SortOrderSchema).optional(),
        resolvedAt: z.lazy(() => SortOrderSchema).optional(),
        resolvedBy: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        updatedBy: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceCommentMinOrderByAggregateInputSchema
