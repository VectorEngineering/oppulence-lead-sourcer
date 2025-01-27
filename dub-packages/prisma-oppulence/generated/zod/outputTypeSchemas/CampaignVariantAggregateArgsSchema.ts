import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignVariantWhereInputSchema } from '../inputTypeSchemas/CampaignVariantWhereInputSchema'
import { CampaignVariantOrderByWithRelationInputSchema } from '../inputTypeSchemas/CampaignVariantOrderByWithRelationInputSchema'
import { CampaignVariantWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignVariantWhereUniqueInputSchema'

export const CampaignVariantAggregateArgsSchema: z.ZodType<Prisma.CampaignVariantAggregateArgs> = z.object({
  where: CampaignVariantWhereInputSchema.optional(),
  orderBy: z.union([ CampaignVariantOrderByWithRelationInputSchema.array(),CampaignVariantOrderByWithRelationInputSchema ]).optional(),
  cursor: CampaignVariantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CampaignVariantAggregateArgsSchema;
