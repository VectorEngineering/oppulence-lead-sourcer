import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceAttachmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceAttachmentSumOrderByAggregateInput> = z
    .object({
        size: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceAttachmentSumOrderByAggregateInputSchema
