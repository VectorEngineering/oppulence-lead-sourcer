import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryWhereInputSchema } from './InvoiceHistoryWhereInputSchema'

export const InvoiceHistoryListRelationFilterSchema: z.ZodType<Prisma.InvoiceHistoryListRelationFilter> = z
    .object({
        every: z.lazy(() => InvoiceHistoryWhereInputSchema).optional(),
        some: z.lazy(() => InvoiceHistoryWhereInputSchema).optional(),
        none: z.lazy(() => InvoiceHistoryWhereInputSchema).optional()
    })
    .strict()

export default InvoiceHistoryListRelationFilterSchema
