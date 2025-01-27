import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  color: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  projectId: z.string(),
  context: z.string().nullish(),
  confidence: z.number().nullish(),
  metadata: JsonValueSchema.nullable(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TagOptionalDefaultsSchema = TagSchema.merge(z.object({
  id: z.string().cuid().optional(),
  color: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type TagOptionalDefaults = z.infer<typeof TagOptionalDefaultsSchema>

export default TagSchema;
