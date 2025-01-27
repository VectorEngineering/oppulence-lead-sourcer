import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const CampaignVariantOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CampaignVariantOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default CampaignVariantOrderByRelationAggregateInputSchema
