import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// DOCUMENT SCHEMA
/////////////////////////////////////////

export const DocumentSchema = z.object({
  id: z.string().cuid(),
  body: z.string().nullish(),
  createdAt: z.coerce.date().nullish(),
  metadata: JsonValueSchema.nullable(),
  name: z.string().nullish(),
  objectId: z.string().nullish(),
  ownerId: z.string().nullish(),
  parentId: z.string().nullish(),
  pathTokens: z.string(),
  tag: z.string().nullish(),
  projectId: z.string().nullish(),
  title: z.string().nullish(),
  description: z.string().nullish(),
  type: z.string().nullish(),
  url: z.string(),
  size: z.number().int().nullish(),
  mimeType: z.string().nullish(),
  isConfidential: z.boolean(),
  documentType: z.string().nullish(),
  version: z.string().nullish(),
  status: z.string().nullish(),
  updatedAt: z.coerce.date(),
  expiryDate: z.coerce.date().nullish(),
  shareableLink: z.string().nullish(),
  createdBy: z.string().nullish(),
})

export type Document = z.infer<typeof DocumentSchema>

/////////////////////////////////////////
// DOCUMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DocumentOptionalDefaultsSchema = DocumentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isConfidential: z.boolean().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DocumentOptionalDefaults = z.infer<typeof DocumentOptionalDefaultsSchema>

export default DocumentSchema;
