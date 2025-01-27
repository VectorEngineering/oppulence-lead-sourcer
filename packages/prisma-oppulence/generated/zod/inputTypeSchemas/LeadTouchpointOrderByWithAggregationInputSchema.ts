import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadTouchpointCountOrderByAggregateInputSchema } from './LeadTouchpointCountOrderByAggregateInputSchema'
import { LeadTouchpointMaxOrderByAggregateInputSchema } from './LeadTouchpointMaxOrderByAggregateInputSchema'
import { LeadTouchpointMinOrderByAggregateInputSchema } from './LeadTouchpointMinOrderByAggregateInputSchema'

export const LeadTouchpointOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadTouchpointOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        channel: z.lazy(() => SortOrderSchema).optional(),
        campaign: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        interaction: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        timestamp: z.lazy(() => SortOrderSchema).optional(),
        isFirstTouch: z.lazy(() => SortOrderSchema).optional(),
        isLastTouch: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadTouchpointCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadTouchpointMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadTouchpointMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadTouchpointOrderByWithAggregationInputSchema
