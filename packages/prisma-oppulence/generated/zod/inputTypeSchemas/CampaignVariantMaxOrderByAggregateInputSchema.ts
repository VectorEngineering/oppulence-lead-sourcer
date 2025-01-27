import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const CampaignVariantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CampaignVariantMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        campaignId: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default CampaignVariantMaxOrderByAggregateInputSchema
