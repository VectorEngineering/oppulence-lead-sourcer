import { z } from 'zod';

/////////////////////////////////////////
// LINK TAG SCHEMA
/////////////////////////////////////////

export const LinkTagSchema = z.object({
  id: z.string().cuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  linkId: z.string(),
  tagId: z.string(),
})

export type LinkTag = z.infer<typeof LinkTagSchema>

/////////////////////////////////////////
// LINK TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LinkTagOptionalDefaultsSchema = LinkTagSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LinkTagOptionalDefaults = z.infer<typeof LinkTagOptionalDefaultsSchema>

export default LinkTagSchema;
