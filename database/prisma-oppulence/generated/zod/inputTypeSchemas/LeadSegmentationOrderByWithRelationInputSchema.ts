import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema'
import { LeadSegmentationHistoryOrderByRelationAggregateInputSchema } from './LeadSegmentationHistoryOrderByRelationAggregateInputSchema'
import { LeadSegmentationOrderByRelevanceInputSchema } from './LeadSegmentationOrderByRelevanceInputSchema'

export const LeadSegmentationOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadSegmentationOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        industrySegment: z.lazy(() => SortOrderSchema).optional(),
        companySize: z.lazy(() => SortOrderSchema).optional(),
        geographicRegion: z.lazy(() => SortOrderSchema).optional(),
        purchaseHistory: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        productUsage: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        engagementLevel: z.lazy(() => SortOrderSchema).optional(),
        decisionMaking: z.lazy(() => SortOrderSchema).optional(),
        innovationLevel: z.lazy(() => SortOrderSchema).optional(),
        riskTolerance: z.lazy(() => SortOrderSchema).optional(),
        customerLifetimeValue: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        profitabilitySegment: z.lazy(() => SortOrderSchema).optional(),
        growthPotential: z.lazy(() => SortOrderSchema).optional(),
        segmentTags: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
        segmentationHistory: z.lazy(() => LeadSegmentationHistoryOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => LeadSegmentationOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default LeadSegmentationOrderByWithRelationInputSchema
