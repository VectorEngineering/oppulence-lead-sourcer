import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// TRANSACTION CATEGORY SCHEMA
/////////////////////////////////////////

export const TransactionCategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullish(),
  color: z.string().nullish(),
  icon: z.string().nullish(),
  parentId: z.string().nullish(),
  path: z.string().nullish(),
  level: z.number().int(),
  isSystem: z.boolean(),
  isActive: z.boolean(),
  metadata: JsonValueSchema.nullable(),
  projectId: z.string(),
  budgetLimit: z.number().nullish(),
  warningThreshold: z.number().nullish(),
  trackingEnabled: z.boolean(),
  vatRate: z.number().nullish(),
  taxCode: z.string().nullish(),
  taxDeductible: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TransactionCategory = z.infer<typeof TransactionCategorySchema>

/////////////////////////////////////////
// TRANSACTION CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionCategoryOptionalDefaultsSchema = TransactionCategorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  level: z.number().int().optional(),
  isSystem: z.boolean().optional(),
  isActive: z.boolean().optional(),
  trackingEnabled: z.boolean().optional(),
  taxDeductible: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type TransactionCategoryOptionalDefaults = z.infer<typeof TransactionCategoryOptionalDefaultsSchema>

export default TransactionCategorySchema;
