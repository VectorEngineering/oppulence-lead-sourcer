import { z } from 'zod';

/////////////////////////////////////////
// LEAD CONSENT SCHEMA
/////////////////////////////////////////

export const LeadConsentSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  type: z.string(),
  status: z.boolean(),
  source: z.string(),
  ipAddress: z.string().nullish(),
  timestamp: z.coerce.date(),
  expiryDate: z.coerce.date().nullish(),
  document: z.string().nullish(),
})

export type LeadConsent = z.infer<typeof LeadConsentSchema>

/////////////////////////////////////////
// LEAD CONSENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadConsentOptionalDefaultsSchema = LeadConsentSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadConsentOptionalDefaults = z.infer<typeof LeadConsentOptionalDefaultsSchema>

export default LeadConsentSchema;
