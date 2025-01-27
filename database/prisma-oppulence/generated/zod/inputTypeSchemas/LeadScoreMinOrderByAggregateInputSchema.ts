import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadScoreMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadScoreMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        websiteVisits: z.lazy(() => SortOrderSchema).optional(),
        emailEngagement: z.lazy(() => SortOrderSchema).optional(),
        socialEngagement: z.lazy(() => SortOrderSchema).optional(),
        contentDownloads: z.lazy(() => SortOrderSchema).optional(),
        companySizeScore: z.lazy(() => SortOrderSchema).optional(),
        industryScore: z.lazy(() => SortOrderSchema).optional(),
        budgetScore: z.lazy(() => SortOrderSchema).optional(),
        technicalFitScore: z.lazy(() => SortOrderSchema).optional(),
        meetingAttendance: z.lazy(() => SortOrderSchema).optional(),
        responseTime: z.lazy(() => SortOrderSchema).optional(),
        interactionQuality: z.lazy(() => SortOrderSchema).optional(),
        behavioralWeight: z.lazy(() => SortOrderSchema).optional(),
        demographicWeight: z.lazy(() => SortOrderSchema).optional(),
        engagementWeight: z.lazy(() => SortOrderSchema).optional(),
        totalScore: z.lazy(() => SortOrderSchema).optional(),
        scoringMethod: z.lazy(() => SortOrderSchema).optional(),
        lastCalculated: z.lazy(() => SortOrderSchema).optional(),
        nextRecalculation: z.lazy(() => SortOrderSchema).optional(),
        confidenceScore: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadScoreMinOrderByAggregateInputSchema
