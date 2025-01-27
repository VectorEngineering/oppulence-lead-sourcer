import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadProductFitAssessmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentCountOrderByAggregateInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            productFitId: z.lazy(() => SortOrderSchema).optional(),
            assessor: z.lazy(() => SortOrderSchema).optional(),
            scores: z.lazy(() => SortOrderSchema).optional(),
            notes: z.lazy(() => SortOrderSchema).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadProductFitAssessmentCountOrderByAggregateInputSchema
