import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadOrderByRelationAggregateInputSchema } from './LeadOrderByRelationAggregateInputSchema'
import { LeadTouchpointOrderByRelationAggregateInputSchema } from './LeadTouchpointOrderByRelationAggregateInputSchema'
import { CampaignVariantOrderByRelationAggregateInputSchema } from './CampaignVariantOrderByRelationAggregateInputSchema'
import { CampaignOrderByRelevanceInputSchema } from './CampaignOrderByRelevanceInputSchema'

export const CampaignOrderByWithRelationInputSchema: z.ZodType<Prisma.CampaignOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        budget: z.lazy(() => SortOrderSchema).optional(),
        actualSpend: z.lazy(() => SortOrderSchema).optional(),
        startDate: z.lazy(() => SortOrderSchema).optional(),
        endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        impressions: z.lazy(() => SortOrderSchema).optional(),
        clicks: z.lazy(() => SortOrderSchema).optional(),
        conversions: z.lazy(() => SortOrderSchema).optional(),
        revenue: z.lazy(() => SortOrderSchema).optional(),
        roi: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utmSource: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utmMedium: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utmCampaign: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utmContent: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        utmTerm: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        abTestEnabled: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        leads: z.lazy(() => LeadOrderByRelationAggregateInputSchema).optional(),
        touchpoints: z.lazy(() => LeadTouchpointOrderByRelationAggregateInputSchema).optional(),
        variants: z.lazy(() => CampaignVariantOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => CampaignOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default CampaignOrderByWithRelationInputSchema
