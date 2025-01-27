import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadScoreCountOrderByAggregateInputSchema } from './LeadScoreCountOrderByAggregateInputSchema'
import { LeadScoreAvgOrderByAggregateInputSchema } from './LeadScoreAvgOrderByAggregateInputSchema'
import { LeadScoreMaxOrderByAggregateInputSchema } from './LeadScoreMaxOrderByAggregateInputSchema'
import { LeadScoreMinOrderByAggregateInputSchema } from './LeadScoreMinOrderByAggregateInputSchema'
import { LeadScoreSumOrderByAggregateInputSchema } from './LeadScoreSumOrderByAggregateInputSchema'

export const LeadScoreOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadScoreOrderByWithAggregationInput> = z
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
        nextRecalculation: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        mlFeatures: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        confidenceScore: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => LeadScoreCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => LeadScoreAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadScoreMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadScoreMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => LeadScoreSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadScoreOrderByWithAggregationInputSchema
