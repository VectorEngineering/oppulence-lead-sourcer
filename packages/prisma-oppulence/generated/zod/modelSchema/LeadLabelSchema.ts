import { z } from 'zod';

/////////////////////////////////////////
// LEAD LABEL SCHEMA
/////////////////////////////////////////

export const LeadLabelSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  name: z.string(),
  color: z.string().nullish(),
  description: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LeadLabel = z.infer<typeof LeadLabelSchema>

/////////////////////////////////////////
// LEAD LABEL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadLabelOptionalDefaultsSchema = LeadLabelSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadLabelOptionalDefaults = z.infer<typeof LeadLabelOptionalDefaultsSchema>

export default LeadLabelSchema;
