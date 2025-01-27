import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { TransactionStatusSchema } from '../inputTypeSchemas/TransactionStatusSchema'
import { TransactionVerificationStatusSchema } from '../inputTypeSchemas/TransactionVerificationStatusSchema'
import { TransactionReconciliationStatusSchema } from '../inputTypeSchemas/TransactionReconciliationStatusSchema'
import { TransactionPrioritySchema } from '../inputTypeSchemas/TransactionPrioritySchema'
import { TransactionRiskLevelSchema } from '../inputTypeSchemas/TransactionRiskLevelSchema'
import { TransactionCategoryTagSchema } from '../inputTypeSchemas/TransactionCategoryTagSchema'
import { TransactionMethodSchema } from '../inputTypeSchemas/TransactionMethodSchema'
import { TransactionFrequencySchema } from '../inputTypeSchemas/TransactionFrequencySchema'

/////////////////////////////////////////
// TRANSACTION SCHEMA
/////////////////////////////////////////

export const TransactionSchema = z.object({
  status: TransactionStatusSchema,
  verificationStatus: TransactionVerificationStatusSchema,
  reconciliationStatus: TransactionReconciliationStatusSchema,
  priority: TransactionPrioritySchema,
  riskLevel: TransactionRiskLevelSchema,
  categoryTag: TransactionCategoryTagSchema.nullish(),
  method: TransactionMethodSchema,
  frequency: TransactionFrequencySchema.nullish(),
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullish(),
  note: z.string().nullish(),
  internalNotes: z.string().nullish(),
  reference: z.string().nullish(),
  amount: z.number(),
  baseAmount: z.number().nullish(),
  balance: z.number().nullish(),
  exchangeRate: z.number().nullish(),
  fees: z.number().nullish(),
  tax: z.number().nullish(),
  taxRate: z.number().nullish(),
  currency: z.string(),
  baseCurrency: z.string().nullish(),
  date: z.coerce.date(),
  valueDate: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  clearedAt: z.coerce.date().nullish(),
  reconciledAt: z.coerce.date().nullish(),
  cancelledAt: z.coerce.date().nullish(),
  categoryId: z.string().nullish(),
  categorySlug: z.string().nullish(),
  subcategory: z.string().nullish(),
  type: z.string().nullish(),
  direction: z.string().nullish(),
  recurring: z.boolean().nullish(),
  nextDueDate: z.coerce.date().nullish(),
  recurringRules: JsonValueSchema.nullable(),
  internal: z.boolean().nullish(),
  internalTransactionId: z.string().nullish(),
  manual: z.boolean().nullish(),
  needsReview: z.boolean(),
  isDisputed: z.boolean(),
  isFlagged: z.boolean(),
  isReconciled: z.boolean(),
  isConfidential: z.boolean(),
  budgetCategory: z.string().nullish(),
  costCenter: z.string().nullish(),
  profitCenter: z.string().nullish(),
  projectCode: z.string().nullish(),
  departmentCode: z.string().nullish(),
  complianceStatus: z.string().nullish(),
  auditTrail: JsonValueSchema.nullable(),
  verifiedBy: z.string().nullish(),
  verifiedAt: z.coerce.date().nullish(),
  lastReviewedBy: z.string().nullish(),
  lastReviewedAt: z.coerce.date().nullish(),
  reconciliationId: z.string().nullish(),
  matchingCriteria: JsonValueSchema.nullable(),
  reconciliationNotes: z.string().nullish(),
  metadata: JsonValueSchema.nullable(),
  customFields: JsonValueSchema.nullable(),
  labels: JsonValueSchema.nullable(),
  notified: z.boolean(),
  bankAccountId: z.string().nullish(),
  assignedId: z.string().nullish(),
  projectId: z.string(),
})

export type Transaction = z.infer<typeof TransactionSchema>

/////////////////////////////////////////
// TRANSACTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionOptionalDefaultsSchema = TransactionSchema.merge(z.object({
  status: TransactionStatusSchema.optional(),
  verificationStatus: TransactionVerificationStatusSchema.optional(),
  reconciliationStatus: TransactionReconciliationStatusSchema.optional(),
  priority: TransactionPrioritySchema.optional(),
  riskLevel: TransactionRiskLevelSchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  needsReview: z.boolean().optional(),
  isDisputed: z.boolean().optional(),
  isFlagged: z.boolean().optional(),
  isReconciled: z.boolean().optional(),
  isConfidential: z.boolean().optional(),
  notified: z.boolean().optional(),
}))

export type TransactionOptionalDefaults = z.infer<typeof TransactionOptionalDefaultsSchema>

export default TransactionSchema;
