import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCompetitiveAnalysisCountOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCountOrderByAggregateInput> =
    z
        .object({
            id: z.lazy(() => SortOrderSchema).optional(),
            leadId: z.lazy(() => SortOrderSchema).optional(),
            competitiveLandscape: z.lazy(() => SortOrderSchema).optional(),
            ourStrengths: z.lazy(() => SortOrderSchema).optional(),
            ourWeaknesses: z.lazy(() => SortOrderSchema).optional(),
            competitors: z.lazy(() => SortOrderSchema).optional(),
            competitorProducts: z.lazy(() => SortOrderSchema).optional(),
            competitorPricing: z.lazy(() => SortOrderSchema).optional(),
            winStrategy: z.lazy(() => SortOrderSchema).optional(),
            differentiators: z.lazy(() => SortOrderSchema).optional(),
            responseStrategy: z.lazy(() => SortOrderSchema).optional(),
            competitiveRisks: z.lazy(() => SortOrderSchema).optional(),
            marketThreats: z.lazy(() => SortOrderSchema).optional(),
            mitigationPlans: z.lazy(() => SortOrderSchema).optional(),
            lastUpdated: z.lazy(() => SortOrderSchema).optional(),
            nextReviewDate: z.lazy(() => SortOrderSchema).optional(),
            createdAt: z.lazy(() => SortOrderSchema).optional(),
            updatedAt: z.lazy(() => SortOrderSchema).optional()
        })
        .strict()

export default LeadCompetitiveAnalysisCountOrderByAggregateInputSchema
