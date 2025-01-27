import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CampaignIncludeSchema } from '../inputTypeSchemas/CampaignIncludeSchema'
import { CampaignWhereInputSchema } from '../inputTypeSchemas/CampaignWhereInputSchema'
import { CampaignOrderByWithRelationInputSchema } from '../inputTypeSchemas/CampaignOrderByWithRelationInputSchema'
import { CampaignWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignWhereUniqueInputSchema'
import { CampaignScalarFieldEnumSchema } from '../inputTypeSchemas/CampaignScalarFieldEnumSchema'
import { LeadFindManyArgsSchema } from "../outputTypeSchemas/LeadFindManyArgsSchema"
import { LeadTouchpointFindManyArgsSchema } from "../outputTypeSchemas/LeadTouchpointFindManyArgsSchema"
import { CampaignVariantFindManyArgsSchema } from "../outputTypeSchemas/CampaignVariantFindManyArgsSchema"
import { CampaignCountOutputTypeArgsSchema } from "../outputTypeSchemas/CampaignCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CampaignSelectSchema: z.ZodType<Prisma.CampaignSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  status: z.boolean().optional(),
  budget: z.boolean().optional(),
  actualSpend: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  impressions: z.boolean().optional(),
  clicks: z.boolean().optional(),
  conversions: z.boolean().optional(),
  revenue: z.boolean().optional(),
  roi: z.boolean().optional(),
  utmSource: z.boolean().optional(),
  utmMedium: z.boolean().optional(),
  utmCampaign: z.boolean().optional(),
  utmContent: z.boolean().optional(),
  utmTerm: z.boolean().optional(),
  abTestEnabled: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  leads: z.union([z.boolean(),z.lazy(() => LeadFindManyArgsSchema)]).optional(),
  touchpoints: z.union([z.boolean(),z.lazy(() => LeadTouchpointFindManyArgsSchema)]).optional(),
  variants: z.union([z.boolean(),z.lazy(() => CampaignVariantFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CampaignCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CampaignFindManyArgsSchema: z.ZodType<Prisma.CampaignFindManyArgs> = z.object({
  select: CampaignSelectSchema.optional(),
  include: CampaignIncludeSchema.optional(),
  where: CampaignWhereInputSchema.optional(),
  orderBy: z.union([ CampaignOrderByWithRelationInputSchema.array(),CampaignOrderByWithRelationInputSchema ]).optional(),
  cursor: CampaignWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CampaignScalarFieldEnumSchema,CampaignScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CampaignFindManyArgsSchema;
