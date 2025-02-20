import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionEnrichmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TransactionEnrichmentOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default TransactionEnrichmentOrderByRelationAggregateInputSchema
