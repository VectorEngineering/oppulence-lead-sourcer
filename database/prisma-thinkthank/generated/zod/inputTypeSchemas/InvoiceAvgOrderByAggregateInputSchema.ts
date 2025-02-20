import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceAvgOrderByAggregateInput> = z
    .object({
        amount: z.lazy(() => SortOrderSchema).optional(),
        fee: z.lazy(() => SortOrderSchema).optional(),
        total: z.lazy(() => SortOrderSchema).optional(),
        discount: z.lazy(() => SortOrderSchema).optional(),
        fileSize: z.lazy(() => SortOrderSchema).optional(),
        subtotal: z.lazy(() => SortOrderSchema).optional(),
        tax: z.lazy(() => SortOrderSchema).optional(),
        vat: z.lazy(() => SortOrderSchema).optional(),
        version: z.lazy(() => SortOrderSchema).optional(),
        paymentDue: z.lazy(() => SortOrderSchema).optional(),
        refundAmount: z.lazy(() => SortOrderSchema).optional(),
        conversionRate: z.lazy(() => SortOrderSchema).optional(),
        processingFees: z.lazy(() => SortOrderSchema).optional(),
        profitMargin: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceAvgOrderByAggregateInputSchema
