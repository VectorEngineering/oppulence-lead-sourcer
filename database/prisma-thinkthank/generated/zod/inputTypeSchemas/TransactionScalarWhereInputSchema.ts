import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumTransactionStatusFilterSchema } from './EnumTransactionStatusFilterSchema';
import { TransactionStatusSchema } from './TransactionStatusSchema';
import { EnumTransactionVerificationStatusFilterSchema } from './EnumTransactionVerificationStatusFilterSchema';
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema';
import { EnumTransactionReconciliationStatusFilterSchema } from './EnumTransactionReconciliationStatusFilterSchema';
import { TransactionReconciliationStatusSchema } from './TransactionReconciliationStatusSchema';
import { EnumTransactionPriorityFilterSchema } from './EnumTransactionPriorityFilterSchema';
import { TransactionPrioritySchema } from './TransactionPrioritySchema';
import { EnumTransactionRiskLevelFilterSchema } from './EnumTransactionRiskLevelFilterSchema';
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema';
import { EnumTransactionCategoryTagNullableFilterSchema } from './EnumTransactionCategoryTagNullableFilterSchema';
import { TransactionCategoryTagSchema } from './TransactionCategoryTagSchema';
import { EnumTransactionMethodFilterSchema } from './EnumTransactionMethodFilterSchema';
import { TransactionMethodSchema } from './TransactionMethodSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { EnumTransactionFrequencyNullableFilterSchema } from './EnumTransactionFrequencyNullableFilterSchema';
import { TransactionFrequencySchema } from './TransactionFrequencySchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const TransactionScalarWhereInputSchema: z.ZodType<Prisma.TransactionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionScalarWhereInputSchema),z.lazy(() => TransactionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  note: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  internalNotes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  reference: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  baseAmount: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  balance: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  exchangeRate: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  fees: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  tax: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  taxRate: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  baseCurrency: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  valueDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  clearedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reconciledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  cancelledAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTransactionStatusFilterSchema),z.lazy(() => TransactionStatusSchema) ]).optional(),
  verificationStatus: z.union([ z.lazy(() => EnumTransactionVerificationStatusFilterSchema),z.lazy(() => TransactionVerificationStatusSchema) ]).optional(),
  reconciliationStatus: z.union([ z.lazy(() => EnumTransactionReconciliationStatusFilterSchema),z.lazy(() => TransactionReconciliationStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => EnumTransactionPriorityFilterSchema),z.lazy(() => TransactionPrioritySchema) ]).optional(),
  riskLevel: z.union([ z.lazy(() => EnumTransactionRiskLevelFilterSchema),z.lazy(() => TransactionRiskLevelSchema) ]).optional(),
  categoryTag: z.union([ z.lazy(() => EnumTransactionCategoryTagNullableFilterSchema),z.lazy(() => TransactionCategoryTagSchema) ]).optional().nullable(),
  categoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  categorySlug: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subcategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  method: z.union([ z.lazy(() => EnumTransactionMethodFilterSchema),z.lazy(() => TransactionMethodSchema) ]).optional(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  direction: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  recurring: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  frequency: z.union([ z.lazy(() => EnumTransactionFrequencyNullableFilterSchema),z.lazy(() => TransactionFrequencySchema) ]).optional().nullable(),
  nextDueDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  recurringRules: z.lazy(() => JsonNullableFilterSchema).optional(),
  internal: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  internalTransactionId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  manual: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  needsReview: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isDisputed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isFlagged: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isReconciled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isConfidential: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  budgetCategory: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  costCenter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profitCenter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  departmentCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  complianceStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  auditTrail: z.lazy(() => JsonNullableFilterSchema).optional(),
  verifiedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  verifiedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastReviewedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastReviewedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  reconciliationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  matchingCriteria: z.lazy(() => JsonNullableFilterSchema).optional(),
  reconciliationNotes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  customFields: z.lazy(() => JsonNullableFilterSchema).optional(),
  labels: z.lazy(() => JsonNullableFilterSchema).optional(),
  notified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  bankAccountId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  assignedId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default TransactionScalarWhereInputSchema;
