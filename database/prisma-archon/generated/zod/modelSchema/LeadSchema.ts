import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD SCHEMA
/////////////////////////////////////////

export const LeadSchema = z.object({
  id: z.string().cuid(),
  endpointId: z.string(),
  data: JsonValueSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Lead = z.infer<typeof LeadSchema>

/////////////////////////////////////////
// LEAD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadOptionalDefaultsSchema = LeadSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadOptionalDefaults = z.infer<typeof LeadOptionalDefaultsSchema>

export default LeadSchema;
