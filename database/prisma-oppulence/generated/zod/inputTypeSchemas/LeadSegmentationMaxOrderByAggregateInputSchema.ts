import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadSegmentationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadSegmentationMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        industrySegment: z.lazy(() => SortOrderSchema).optional(),
        companySize: z.lazy(() => SortOrderSchema).optional(),
        geographicRegion: z.lazy(() => SortOrderSchema).optional(),
        engagementLevel: z.lazy(() => SortOrderSchema).optional(),
        decisionMaking: z.lazy(() => SortOrderSchema).optional(),
        innovationLevel: z.lazy(() => SortOrderSchema).optional(),
        riskTolerance: z.lazy(() => SortOrderSchema).optional(),
        customerLifetimeValue: z.lazy(() => SortOrderSchema).optional(),
        profitabilitySegment: z.lazy(() => SortOrderSchema).optional(),
        growthPotential: z.lazy(() => SortOrderSchema).optional(),
        segmentTags: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadSegmentationMaxOrderByAggregateInputSchema
