import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSegmentationHistoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryCountOrderByAggregateInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            segmentationId: z.lazy(() => SortOrderSchema).optional(),
            previousSegments: z.lazy(() => SortOrderSchema).optional(),
            newSegments: z.lazy(() => SortOrderSchema).optional(),
            reason: z.lazy(() => SortOrderSchema).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadSegmentationHistoryCountOrderByAggregateInputSchema
