import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// TRANSACTION HISTORY SCHEMA
/////////////////////////////////////////

export const TransactionHistorySchema = z.object({
  id: z.string().cuid(),
  transactionId: z.string(),
  action: z.string(),
  description: z.string(),
  changes: JsonValueSchema.nullable(),
  metadata: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  createdBy: z.string().nullish(),
})

export type TransactionHistory = z.infer<typeof TransactionHistorySchema>

/////////////////////////////////////////
// TRANSACTION HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionHistoryOptionalDefaultsSchema = TransactionHistorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type TransactionHistoryOptionalDefaults = z.infer<typeof TransactionHistoryOptionalDefaultsSchema>

export default TransactionHistorySchema;
