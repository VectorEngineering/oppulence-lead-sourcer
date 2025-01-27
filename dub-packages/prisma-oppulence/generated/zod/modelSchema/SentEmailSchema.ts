import { z } from 'zod';

/////////////////////////////////////////
// SENT EMAIL SCHEMA
/////////////////////////////////////////

export const SentEmailSchema = z.object({
  id: z.string().cuid(),
  type: z.string(),
  createdAt: z.coerce.date(),
  projectId: z.string().nullish(),
})

export type SentEmail = z.infer<typeof SentEmailSchema>

/////////////////////////////////////////
// SENT EMAIL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SentEmailOptionalDefaultsSchema = SentEmailSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type SentEmailOptionalDefaults = z.infer<typeof SentEmailOptionalDefaultsSchema>

export default SentEmailSchema;
