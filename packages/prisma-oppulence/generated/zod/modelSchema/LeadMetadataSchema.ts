import { z } from 'zod';

/////////////////////////////////////////
// LEAD METADATA SCHEMA
/////////////////////////////////////////

export const LeadMetadataSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  key: z.string(),
  value: z.string(),
  type: z.string(),
  category: z.string().nullish(),
  description: z.string().nullish(),
  isSearchable: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LeadMetadata = z.infer<typeof LeadMetadataSchema>

/////////////////////////////////////////
// LEAD METADATA OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadMetadataOptionalDefaultsSchema = LeadMetadataSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isSearchable: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadMetadataOptionalDefaults = z.infer<typeof LeadMetadataOptionalDefaultsSchema>

export default LeadMetadataSchema;
