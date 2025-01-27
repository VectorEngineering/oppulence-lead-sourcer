import { z } from 'zod';

/////////////////////////////////////////
// TRANSACTION COMMENT SCHEMA
/////////////////////////////////////////

export const TransactionCommentSchema = z.object({
  id: z.string().cuid(),
  transactionId: z.string(),
  content: z.string(),
  type: z.string().nullish(),
  visibility: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
})

export type TransactionComment = z.infer<typeof TransactionCommentSchema>

/////////////////////////////////////////
// TRANSACTION COMMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionCommentOptionalDefaultsSchema = TransactionCommentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type TransactionCommentOptionalDefaults = z.infer<typeof TransactionCommentOptionalDefaultsSchema>

export default TransactionCommentSchema;
