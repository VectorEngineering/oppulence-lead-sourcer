import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSocialProfileOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadSocialProfileOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadSocialProfileOrderByRelationAggregateInputSchema
