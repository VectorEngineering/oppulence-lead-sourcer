import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InvoiceAttachmentCountOrderByAggregateInputSchema } from './InvoiceAttachmentCountOrderByAggregateInputSchema'
import { InvoiceAttachmentAvgOrderByAggregateInputSchema } from './InvoiceAttachmentAvgOrderByAggregateInputSchema'
import { InvoiceAttachmentMaxOrderByAggregateInputSchema } from './InvoiceAttachmentMaxOrderByAggregateInputSchema'
import { InvoiceAttachmentMinOrderByAggregateInputSchema } from './InvoiceAttachmentMinOrderByAggregateInputSchema'
import { InvoiceAttachmentSumOrderByAggregateInputSchema } from './InvoiceAttachmentSumOrderByAggregateInputSchema'

export const InvoiceAttachmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvoiceAttachmentOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        invoiceId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        path: z.lazy(() => SortOrderSchema).optional(),
        size: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        mimeType: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => InvoiceAttachmentCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => InvoiceAttachmentAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => InvoiceAttachmentMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => InvoiceAttachmentMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => InvoiceAttachmentSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default InvoiceAttachmentOrderByWithAggregationInputSchema
