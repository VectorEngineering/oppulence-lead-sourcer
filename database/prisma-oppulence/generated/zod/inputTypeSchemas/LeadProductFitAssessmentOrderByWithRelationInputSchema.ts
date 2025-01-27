import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { LeadProductFitOrderByWithRelationInputSchema } from './LeadProductFitOrderByWithRelationInputSchema'
import { LeadProductFitAssessmentOrderByRelevanceInputSchema } from './LeadProductFitAssessmentOrderByRelevanceInputSchema'

export const LeadProductFitAssessmentOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        productFitId: z.lazy(() => SortOrderSchema).optional(),
        assessor: z.lazy(() => SortOrderSchema).optional(),
        scores: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        productFit: z.lazy(() => LeadProductFitOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => LeadProductFitAssessmentOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadProductFitAssessmentOrderByWithRelationInputSchema
