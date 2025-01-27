import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadCommentOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadCommentOrderByRelationAggregateInputSchema
