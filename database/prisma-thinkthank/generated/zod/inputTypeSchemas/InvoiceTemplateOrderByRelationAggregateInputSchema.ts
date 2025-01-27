import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const InvoiceTemplateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InvoiceTemplateOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default InvoiceTemplateOrderByRelationAggregateInputSchema
