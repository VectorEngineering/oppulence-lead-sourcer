import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const DealActivityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DealActivityOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default DealActivityOrderByRelationAggregateInputSchema
