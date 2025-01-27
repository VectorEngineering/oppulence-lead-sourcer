import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadTimelineOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadTimelineOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadTimelineOrderByRelationAggregateInputSchema
