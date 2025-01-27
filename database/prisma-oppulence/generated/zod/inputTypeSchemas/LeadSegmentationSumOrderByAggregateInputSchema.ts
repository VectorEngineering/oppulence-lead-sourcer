import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSegmentationSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadSegmentationSumOrderByAggregateInput> = z
    .object({
        customerLifetimeValue: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadSegmentationSumOrderByAggregateInputSchema
