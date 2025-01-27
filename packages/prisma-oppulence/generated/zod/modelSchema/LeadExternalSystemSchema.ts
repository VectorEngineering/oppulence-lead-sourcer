import { z } from 'zod';
import { LeadExternalSystemProviderSchema } from '../inputTypeSchemas/LeadExternalSystemProviderSchema'

/////////////////////////////////////////
// LEAD EXTERNAL SYSTEM SCHEMA
/////////////////////////////////////////

export const LeadExternalSystemSchema = z.object({
  provider: LeadExternalSystemProviderSchema,
  id: z.string().cuid(),
  leadId: z.string(),
  externalId: z.string(),
  lastSynced: z.coerce.date(),
  syncStatus: z.string(),
  errorMessage: z.string().nullish(),
})

export type LeadExternalSystem = z.infer<typeof LeadExternalSystemSchema>

/////////////////////////////////////////
// LEAD EXTERNAL SYSTEM OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadExternalSystemOptionalDefaultsSchema = LeadExternalSystemSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadExternalSystemOptionalDefaults = z.infer<typeof LeadExternalSystemOptionalDefaultsSchema>

export default LeadExternalSystemSchema;
