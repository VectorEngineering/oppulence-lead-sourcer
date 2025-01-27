import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignWhereInputSchema } from '../inputTypeSchemas/CampaignWhereInputSchema'
import { CampaignOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CampaignOrderByWithAggregationInputSchema'
import { CampaignScalarFieldEnumSchema } from '../inputTypeSchemas/CampaignScalarFieldEnumSchema'
import { CampaignScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CampaignScalarWhereWithAggregatesInputSchema'

export const CampaignGroupByArgsSchema: z.ZodType<Prisma.CampaignGroupByArgs> = z.object({
  where: CampaignWhereInputSchema.optional(),
  orderBy: z.union([ CampaignOrderByWithAggregationInputSchema.array(),CampaignOrderByWithAggregationInputSchema ]).optional(),
  by: CampaignScalarFieldEnumSchema.array(),
  having: CampaignScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CampaignGroupByArgsSchema;
