import { z } from 'zod';
import { CampaignTypeSchema } from '../inputTypeSchemas/CampaignTypeSchema'
import { CampaignStatusSchema } from '../inputTypeSchemas/CampaignStatusSchema'

/////////////////////////////////////////
// CAMPAIGN SCHEMA
/////////////////////////////////////////

export const CampaignSchema = z.object({
  type: CampaignTypeSchema,
  status: CampaignStatusSchema,
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullish(),
  budget: z.number(),
  actualSpend: z.number(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullish(),
  impressions: z.number().int(),
  clicks: z.number().int(),
  conversions: z.number().int(),
  revenue: z.number(),
  roi: z.number().nullish(),
  utmSource: z.string().nullish(),
  utmMedium: z.string().nullish(),
  utmCampaign: z.string().nullish(),
  utmContent: z.string().nullish(),
  utmTerm: z.string().nullish(),
  abTestEnabled: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Campaign = z.infer<typeof CampaignSchema>

/////////////////////////////////////////
// CAMPAIGN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CampaignOptionalDefaultsSchema = CampaignSchema.merge(z.object({
  id: z.string().cuid().optional(),
  actualSpend: z.number().optional(),
  impressions: z.number().int().optional(),
  clicks: z.number().int().optional(),
  conversions: z.number().int().optional(),
  revenue: z.number().optional(),
  abTestEnabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CampaignOptionalDefaults = z.infer<typeof CampaignOptionalDefaultsSchema>

export default CampaignSchema;
