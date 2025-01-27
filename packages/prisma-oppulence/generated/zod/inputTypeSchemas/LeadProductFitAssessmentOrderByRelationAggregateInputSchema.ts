import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadProductFitAssessmentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadProductFitAssessmentOrderByRelationAggregateInputSchema
