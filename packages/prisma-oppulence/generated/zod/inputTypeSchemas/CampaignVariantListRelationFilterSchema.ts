import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignVariantWhereInputSchema } from './CampaignVariantWhereInputSchema'

export const CampaignVariantListRelationFilterSchema: z.ZodType<Prisma.CampaignVariantListRelationFilter> = z
    .object({
        every: z.lazy(() => CampaignVariantWhereInputSchema).optional(),
        some: z.lazy(() => CampaignVariantWhereInputSchema).optional(),
        none: z.lazy(() => CampaignVariantWhereInputSchema).optional()
    })
    .strict()

export default CampaignVariantListRelationFilterSchema
