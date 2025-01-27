import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { InvoiceHistoryCountOrderByAggregateInputSchema } from './InvoiceHistoryCountOrderByAggregateInputSchema'
import { InvoiceHistoryMaxOrderByAggregateInputSchema } from './InvoiceHistoryMaxOrderByAggregateInputSchema'
import { InvoiceHistoryMinOrderByAggregateInputSchema } from './InvoiceHistoryMinOrderByAggregateInputSchema'

export const InvoiceHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvoiceHistoryOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        invoiceId: z.lazy(() => SortOrderSchema).optional(),
        action: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        changes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => InvoiceHistoryCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => InvoiceHistoryMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => InvoiceHistoryMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default InvoiceHistoryOrderByWithAggregationInputSchema
