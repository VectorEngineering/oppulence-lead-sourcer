import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceHistoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceHistoryMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        invoiceId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceHistoryMinOrderByAggregateInputSchema
