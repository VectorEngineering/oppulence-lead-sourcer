import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSegmentationHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadSegmentationHistoryOrderByRelationAggregateInputSchema
