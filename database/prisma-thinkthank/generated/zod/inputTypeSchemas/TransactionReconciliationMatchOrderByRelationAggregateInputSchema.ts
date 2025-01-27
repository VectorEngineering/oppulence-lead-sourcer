import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const TransactionReconciliationMatchOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default TransactionReconciliationMatchOrderByRelationAggregateInputSchema
