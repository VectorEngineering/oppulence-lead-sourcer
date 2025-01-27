import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INBOX LABEL SCHEMA
/////////////////////////////////////////

export const InboxLabelSchema = z.object({
  id: z.string().cuid(),
  inboxId: z.string(),
  name: z.string(),
  color: z.string().nullish(),
  description: z.string().nullish(),
  metadata: JsonValueSchema.nullable(),
  icon: z.string().nullish(),
  category: z.string().nullish(),
  priority: z.number().int().nullish(),
  isSystem: z.boolean(),
  isRequired: z.boolean(),
  validFrom: z.coerce.date().nullish(),
  validUntil: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
})

export type InboxLabel = z.infer<typeof InboxLabelSchema>

/////////////////////////////////////////
// INBOX LABEL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InboxLabelOptionalDefaultsSchema = InboxLabelSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isSystem: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type InboxLabelOptionalDefaults = z.infer<typeof InboxLabelOptionalDefaultsSchema>

export default InboxLabelSchema;
