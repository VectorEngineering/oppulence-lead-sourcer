import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceAttachmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceAttachmentMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        invoiceId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        path: z.lazy(() => SortOrderSchema).optional(),
        size: z.lazy(() => SortOrderSchema).optional(),
        mimeType: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceAttachmentMaxOrderByAggregateInputSchema
