import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { InvoiceCommentTypeSchema } from '../inputTypeSchemas/InvoiceCommentTypeSchema'
import { InvoiceCommentVisibilitySchema } from '../inputTypeSchemas/InvoiceCommentVisibilitySchema'

/////////////////////////////////////////
// INVOICE COMMENT SCHEMA
/////////////////////////////////////////

export const InvoiceCommentSchema = z.object({
  type: InvoiceCommentTypeSchema,
  visibility: InvoiceCommentVisibilitySchema,
  id: z.string().cuid(),
  invoiceId: z.string(),
  content: z.string(),
  title: z.string().nullish(),
  priority: z.string().nullish(),
  status: z.string().nullish(),
  tags: JsonValueSchema.nullable(),
  metadata: JsonValueSchema.nullable(),
  attachments: JsonValueSchema.nullable(),
  mentions: JsonValueSchema.nullable(),
  formatting: JsonValueSchema.nullable(),
  parentId: z.string().nullish(),
  threadPath: z.string().nullish(),
  replyCount: z.number().int(),
  isEdited: z.boolean(),
  editedAt: z.coerce.date().nullish(),
  lastReplyAt: z.coerce.date().nullish(),
  resolvedAt: z.coerce.date().nullish(),
  resolvedBy: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
})

export type InvoiceComment = z.infer<typeof InvoiceCommentSchema>

/////////////////////////////////////////
// INVOICE COMMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvoiceCommentOptionalDefaultsSchema = InvoiceCommentSchema.merge(z.object({
  type: InvoiceCommentTypeSchema.optional(),
  visibility: InvoiceCommentVisibilitySchema.optional(),
  id: z.string().cuid().optional(),
  replyCount: z.number().int().optional(),
  isEdited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type InvoiceCommentOptionalDefaults = z.infer<typeof InvoiceCommentOptionalDefaultsSchema>

export default InvoiceCommentSchema;
