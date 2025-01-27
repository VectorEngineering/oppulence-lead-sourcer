import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignWhereInputSchema } from './CampaignWhereInputSchema'

export const CampaignListRelationFilterSchema: z.ZodType<Prisma.CampaignListRelationFilter> = z
    .object({
        every: z.lazy(() => CampaignWhereInputSchema).optional(),
        some: z.lazy(() => CampaignWhereInputSchema).optional(),
        none: z.lazy(() => CampaignWhereInputSchema).optional()
    })
    .strict()

export default CampaignListRelationFilterSchema
