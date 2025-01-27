import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignArgsSchema } from '../outputTypeSchemas/CampaignArgsSchema'

export const CampaignVariantSelectSchema: z.ZodType<Prisma.CampaignVariantSelect> = z
    .object({
        id: z.boolean().optional(),
        campaignId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        content: z.boolean().optional(),
        metrics: z.boolean().optional(),
        campaign: z.union([z.boolean(), z.lazy(() => CampaignArgsSchema)]).optional()
    })
    .strict()

export default CampaignVariantSelectSchema
