import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const SaleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SaleOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default SaleOrderByRelationAggregateInputSchema
