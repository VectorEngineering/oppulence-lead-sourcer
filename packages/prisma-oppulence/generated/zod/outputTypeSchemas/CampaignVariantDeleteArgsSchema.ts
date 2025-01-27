import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignVariantIncludeSchema } from '../inputTypeSchemas/CampaignVariantIncludeSchema'
import { CampaignVariantWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignVariantWhereUniqueInputSchema'
import { CampaignArgsSchema } from './CampaignArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const CampaignVariantDeleteArgsSchema: z.ZodType<Prisma.CampaignVariantDeleteArgs> = z
    .object({
        select: CampaignVariantSelectSchema.optional(),
        include: CampaignVariantIncludeSchema.optional(),
        where: CampaignVariantWhereUniqueInputSchema
    })
    .strict()

export default CampaignVariantDeleteArgsSchema
