import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadContactPreferenceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadContactPreferenceOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadContactPreferenceOrderByRelationAggregateInputSchema
