import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD CATEGORY SCHEMA
/////////////////////////////////////////

export const LeadCategorySchema = z.object({
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

export type LeadCategory = z.infer<typeof LeadCategorySchema>

/////////////////////////////////////////
// LEAD CATEGORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCategoryOptionalDefaultsSchema = LeadCategorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  level: z.number().int().optional(),
  isSystem: z.boolean().optional(),
  isActive: z.boolean().optional(),
  trackingEnabled: z.boolean().optional(),
  taxDeductible: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadCategoryOptionalDefaults = z.infer<typeof LeadCategoryOptionalDefaultsSchema>

export default LeadCategorySchema;
