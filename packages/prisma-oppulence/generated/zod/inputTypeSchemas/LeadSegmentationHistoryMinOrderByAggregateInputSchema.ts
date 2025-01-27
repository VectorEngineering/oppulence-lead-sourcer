import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSegmentationHistoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        segmentationId: z.lazy(() => SortOrderSchema).optional(),
        reason: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadSegmentationHistoryMinOrderByAggregateInputSchema
