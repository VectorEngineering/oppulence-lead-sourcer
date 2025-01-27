import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionAttachmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionAttachmentSumOrderByAggregateInput> = z
    .object({
        size: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default TransactionAttachmentSumOrderByAggregateInputSchema
