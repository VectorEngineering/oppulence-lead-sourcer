import { z } from 'zod';
import { LeadSocialPlatformSchema } from '../inputTypeSchemas/LeadSocialPlatformSchema'

/////////////////////////////////////////
// LEAD SOCIAL PROFILE SCHEMA
/////////////////////////////////////////

export const LeadSocialProfileSchema = z.object({
  platform: LeadSocialPlatformSchema,
  id: z.string().cuid(),
  leadId: z.string(),
  profileUrl: z.string(),
  username: z.string().nullish(),
  lastSynced: z.coerce.date().nullish(),
})

export type LeadSocialProfile = z.infer<typeof LeadSocialProfileSchema>

/////////////////////////////////////////
// LEAD SOCIAL PROFILE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadSocialProfileOptionalDefaultsSchema = LeadSocialProfileSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadSocialProfileOptionalDefaults = z.infer<typeof LeadSocialProfileOptionalDefaultsSchema>

export default LeadSocialProfileSchema;
