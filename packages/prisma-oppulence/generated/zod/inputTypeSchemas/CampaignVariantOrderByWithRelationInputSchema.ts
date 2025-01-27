import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { CampaignOrderByWithRelationInputSchema } from './CampaignOrderByWithRelationInputSchema'
import { CampaignVariantOrderByRelevanceInputSchema } from './CampaignVariantOrderByRelevanceInputSchema'

export const CampaignVariantOrderByWithRelationInputSchema: z.ZodType<Prisma.CampaignVariantOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        campaignId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        metrics: z.lazy(() => SortOrderSchema).optional(),
        campaign: z.lazy(() => CampaignOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => CampaignVariantOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default CampaignVariantOrderByWithRelationInputSchema
