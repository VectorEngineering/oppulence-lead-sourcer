import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignVariantWhereInputSchema } from '../inputTypeSchemas/CampaignVariantWhereInputSchema'
import { CampaignVariantOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CampaignVariantOrderByWithAggregationInputSchema'
import { CampaignVariantScalarFieldEnumSchema } from '../inputTypeSchemas/CampaignVariantScalarFieldEnumSchema'
import { CampaignVariantScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CampaignVariantScalarWhereWithAggregatesInputSchema'

export const CampaignVariantGroupByArgsSchema: z.ZodType<Prisma.CampaignVariantGroupByArgs> = z
    .object({
        where: CampaignVariantWhereInputSchema.optional(),
        orderBy: z
            .union([CampaignVariantOrderByWithAggregationInputSchema.array(), CampaignVariantOrderByWithAggregationInputSchema])
            .optional(),
        by: CampaignVariantScalarFieldEnumSchema.array(),
        having: CampaignVariantScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default CampaignVariantGroupByArgsSchema
