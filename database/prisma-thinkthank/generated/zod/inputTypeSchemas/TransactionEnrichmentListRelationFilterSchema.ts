import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionEnrichmentWhereInputSchema } from './TransactionEnrichmentWhereInputSchema'

export const TransactionEnrichmentListRelationFilterSchema: z.ZodType<Prisma.TransactionEnrichmentListRelationFilter> = z
    .object({
        every: z.lazy(() => TransactionEnrichmentWhereInputSchema).optional(),
        some: z.lazy(() => TransactionEnrichmentWhereInputSchema).optional(),
        none: z.lazy(() => TransactionEnrichmentWhereInputSchema).optional()
    })
    .strict()

export default TransactionEnrichmentListRelationFilterSchema
