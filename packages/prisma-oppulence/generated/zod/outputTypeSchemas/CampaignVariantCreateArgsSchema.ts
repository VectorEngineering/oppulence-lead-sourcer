import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignVariantIncludeSchema } from '../inputTypeSchemas/CampaignVariantIncludeSchema'
import { CampaignVariantCreateInputSchema } from '../inputTypeSchemas/CampaignVariantCreateInputSchema'
import { CampaignVariantUncheckedCreateInputSchema } from '../inputTypeSchemas/CampaignVariantUncheckedCreateInputSchema'
import { CampaignArgsSchema } from "../outputTypeSchemas/CampaignArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CampaignVariantSelectSchema: z.ZodType<Prisma.CampaignVariantSelect> = z.object({
  id: z.boolean().optional(),
  campaignId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  content: z.boolean().optional(),
  metrics: z.boolean().optional(),
  campaign: z.union([z.boolean(),z.lazy(() => CampaignArgsSchema)]).optional(),
}).strict()

export const CampaignVariantCreateArgsSchema: z.ZodType<Prisma.CampaignVariantCreateArgs> = z.object({
  select: CampaignVariantSelectSchema.optional(),
  include: CampaignVariantIncludeSchema.optional(),
  data: z.union([ CampaignVariantCreateInputSchema,CampaignVariantUncheckedCreateInputSchema ]),
}).strict() ;

export default CampaignVariantCreateArgsSchema;
