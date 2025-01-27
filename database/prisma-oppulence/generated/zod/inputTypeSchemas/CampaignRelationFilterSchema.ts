import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignWhereInputSchema } from './CampaignWhereInputSchema'

export const CampaignRelationFilterSchema: z.ZodType<Prisma.CampaignRelationFilter> = z
    .object({
        is: z.lazy(() => CampaignWhereInputSchema).optional(),
        isNot: z.lazy(() => CampaignWhereInputSchema).optional()
    })
    .strict()

export default CampaignRelationFilterSchema
