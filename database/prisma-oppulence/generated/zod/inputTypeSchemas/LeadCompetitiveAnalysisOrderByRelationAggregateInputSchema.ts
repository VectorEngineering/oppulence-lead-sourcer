import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCompetitiveAnalysisOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisOrderByRelationAggregateInput> =
    z
        .object({
            _count: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadCompetitiveAnalysisOrderByRelationAggregateInputSchema
