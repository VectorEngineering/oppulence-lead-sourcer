import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { CampaignVariantCountOrderByAggregateInputSchema } from './CampaignVariantCountOrderByAggregateInputSchema'
import { CampaignVariantMaxOrderByAggregateInputSchema } from './CampaignVariantMaxOrderByAggregateInputSchema'
import { CampaignVariantMinOrderByAggregateInputSchema } from './CampaignVariantMinOrderByAggregateInputSchema'

export const CampaignVariantOrderByWithAggregationInputSchema: z.ZodType<Prisma.CampaignVariantOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        campaignId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        content: z.lazy(() => SortOrderSchema).optional(),
        metrics: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => CampaignVariantCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => CampaignVariantMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => CampaignVariantMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default CampaignVariantOrderByWithAggregationInputSchema
