import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignVariantIncludeSchema } from '../inputTypeSchemas/CampaignVariantIncludeSchema'
import { CampaignVariantWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignVariantWhereUniqueInputSchema'
import { CampaignVariantCreateInputSchema } from '../inputTypeSchemas/CampaignVariantCreateInputSchema'
import { CampaignVariantUncheckedCreateInputSchema } from '../inputTypeSchemas/CampaignVariantUncheckedCreateInputSchema'
import { CampaignVariantUpdateInputSchema } from '../inputTypeSchemas/CampaignVariantUpdateInputSchema'
import { CampaignVariantUncheckedUpdateInputSchema } from '../inputTypeSchemas/CampaignVariantUncheckedUpdateInputSchema'
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

export const CampaignVariantUpsertArgsSchema: z.ZodType<Prisma.CampaignVariantUpsertArgs> = z
    .object({
        select: CampaignVariantSelectSchema.optional(),
        include: CampaignVariantIncludeSchema.optional(),
        where: CampaignVariantWhereUniqueInputSchema,
        create: z.union([CampaignVariantCreateInputSchema, CampaignVariantUncheckedCreateInputSchema]),
        update: z.union([CampaignVariantUpdateInputSchema, CampaignVariantUncheckedUpdateInputSchema])
    })
    .strict()

export default CampaignVariantUpsertArgsSchema
