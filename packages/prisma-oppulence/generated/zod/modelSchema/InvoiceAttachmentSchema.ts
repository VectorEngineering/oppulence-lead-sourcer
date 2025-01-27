import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INVOICE ATTACHMENT SCHEMA
/////////////////////////////////////////

export const InvoiceAttachmentSchema = z.object({
  id: z.string().cuid(),
  invoiceId: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  type: z.string().nullish(),
  path: z.string(),
  size: z.number().int().nullish(),
  mimeType: z.string().nullish(),
  metadata: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
})

export type InvoiceAttachment = z.infer<typeof InvoiceAttachmentSchema>

/////////////////////////////////////////
// INVOICE ATTACHMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvoiceAttachmentOptionalDefaultsSchema = InvoiceAttachmentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type InvoiceAttachmentOptionalDefaults = z.infer<typeof InvoiceAttachmentOptionalDefaultsSchema>

export default InvoiceAttachmentSchema;
