import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignVariantIncludeSchema } from '../inputTypeSchemas/CampaignVariantIncludeSchema'
import { CampaignVariantWhereInputSchema } from '../inputTypeSchemas/CampaignVariantWhereInputSchema'
import { CampaignVariantOrderByWithRelationInputSchema } from '../inputTypeSchemas/CampaignVariantOrderByWithRelationInputSchema'
import { CampaignVariantWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignVariantWhereUniqueInputSchema'
import { CampaignVariantScalarFieldEnumSchema } from '../inputTypeSchemas/CampaignVariantScalarFieldEnumSchema'
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

export const CampaignVariantFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CampaignVariantFindFirstOrThrowArgs> = z
    .object({
        select: CampaignVariantSelectSchema.optional(),
        include: CampaignVariantIncludeSchema.optional(),
        where: CampaignVariantWhereInputSchema.optional(),
        orderBy: z.union([CampaignVariantOrderByWithRelationInputSchema.array(), CampaignVariantOrderByWithRelationInputSchema]).optional(),
        cursor: CampaignVariantWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([CampaignVariantScalarFieldEnumSchema, CampaignVariantScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default CampaignVariantFindFirstOrThrowArgsSchema
