import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LeadSegmentationHistoryCountOrderByAggregateInputSchema } from './LeadSegmentationHistoryCountOrderByAggregateInputSchema'
import { LeadSegmentationHistoryMaxOrderByAggregateInputSchema } from './LeadSegmentationHistoryMaxOrderByAggregateInputSchema'
import { LeadSegmentationHistoryMinOrderByAggregateInputSchema } from './LeadSegmentationHistoryMinOrderByAggregateInputSchema'

export const LeadSegmentationHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryOrderByWithAggregationInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            segmentationId: z.lazy(() => SortOrderSchema).optional(),
            previousSegments: z.lazy(() => SortOrderSchema).optional(),
            newSegments: z.lazy(() => SortOrderSchema).optional(),
            reason: z.lazy(() => SortOrderSchema).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional(),
            _count: z.lazy(() => LeadSegmentationHistoryCountOrderByAggregateInputSchema).optional(),
            _max: z.lazy(() => LeadSegmentationHistoryMaxOrderByAggregateInputSchema).optional(),
            _min: z.lazy(() => LeadSegmentationHistoryMinOrderByAggregateInputSchema).optional()
        })
        .strict()

export default LeadSegmentationHistoryOrderByWithAggregationInputSchema
