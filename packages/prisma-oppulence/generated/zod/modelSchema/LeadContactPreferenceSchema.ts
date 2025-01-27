import { z } from 'zod';

/////////////////////////////////////////
// LEAD CONTACT PREFERENCE SCHEMA
/////////////////////////////////////////

export const LeadContactPreferenceSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  method: z.string(),
  preferredTime: z.string(),
  preferredDays: z.string(),
  timezone: z.string(),
  notes: z.string().nullish(),
  isActive: z.boolean(),
})

export type LeadContactPreference = z.infer<typeof LeadContactPreferenceSchema>

/////////////////////////////////////////
// LEAD CONTACT PREFERENCE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadContactPreferenceOptionalDefaultsSchema = LeadContactPreferenceSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isActive: z.boolean().optional(),
}))

export type LeadContactPreferenceOptionalDefaults = z.infer<typeof LeadContactPreferenceOptionalDefaultsSchema>

export default LeadContactPreferenceSchema;
