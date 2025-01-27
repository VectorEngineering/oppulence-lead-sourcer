import { z } from 'zod';

/////////////////////////////////////////
// LEAD RISK SCHEMA
/////////////////////////////////////////

export const LeadRiskSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  category: z.string(),
  description: z.string(),
  impact: z.string(),
  probability: z.string(),
  mitigation: z.string(),
  status: z.string(),
})

export type LeadRisk = z.infer<typeof LeadRiskSchema>

/////////////////////////////////////////
// LEAD RISK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadRiskOptionalDefaultsSchema = LeadRiskSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadRiskOptionalDefaults = z.infer<typeof LeadRiskOptionalDefaultsSchema>

export default LeadRiskSchema;
