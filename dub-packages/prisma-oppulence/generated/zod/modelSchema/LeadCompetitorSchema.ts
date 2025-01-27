import { z } from 'zod';

/////////////////////////////////////////
// LEAD COMPETITOR SCHEMA
/////////////////////////////////////////

export const LeadCompetitorSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  name: z.string(),
  strengths: z.string(),
  weaknesses: z.string(),
  pricing: z.string().nullish(),
  differentiator: z.string().nullish(),
  status: z.string(),
})

export type LeadCompetitor = z.infer<typeof LeadCompetitorSchema>

/////////////////////////////////////////
// LEAD COMPETITOR OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCompetitorOptionalDefaultsSchema = LeadCompetitorSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadCompetitorOptionalDefaults = z.infer<typeof LeadCompetitorOptionalDefaultsSchema>

export default LeadCompetitorSchema;
