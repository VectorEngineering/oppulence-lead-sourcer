import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumTransactionStatusWithAggregatesFilterSchema } from './EnumTransactionStatusWithAggregatesFilterSchema';
import { TransactionStatusSchema } from './TransactionStatusSchema';
import { EnumTransactionVerificationStatusWithAggregatesFilterSchema } from './EnumTransactionVerificationStatusWithAggregatesFilterSchema';
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema';
import { EnumTransactionReconciliationStatusWithAggregatesFilterSchema } from './EnumTransactionReconciliationStatusWithAggregatesFilterSchema';
import { TransactionReconciliationStatusSchema } from './TransactionReconciliationStatusSchema';
import { EnumTransactionPriorityWithAggregatesFilterSchema } from './EnumTransactionPriorityWithAggregatesFilterSchema';
import { TransactionPrioritySchema } from './TransactionPrioritySchema';
import { EnumTransactionRiskLevelWithAggregatesFilterSchema } from './EnumTransactionRiskLevelWithAggregatesFilterSchema';
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema';
import { EnumTransactionCategoryTagNullableWithAggregatesFilterSchema } from './EnumTransactionCategoryTagNullableWithAggregatesFilterSchema';
import { TransactionCategoryTagSchema } from './TransactionCategoryTagSchema';
import { EnumTransactionMethodWithAggregatesFilterSchema } from './EnumTransactionMethodWithAggregatesFilterSchema';
import { TransactionMethodSchema } from './TransactionMethodSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { EnumTransactionFrequencyNullableWithAggregatesFilterSchema } from './EnumTransactionFrequencyNullableWithAggregatesFilterSchema';
import { TransactionFrequencySchema } from './TransactionFrequencySchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const TransactionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TransactionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema),z.lazy(() => TransactionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  note: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  internalNotes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  reference: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  baseAmount: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  balance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  exchangeRate: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  fees: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  tax: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  taxRate: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  baseCurrency: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  valueDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  clearedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  reconciledAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  cancelledAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTransactionStatusWithAggregatesFilterSchema),z.lazy(() => TransactionStatusSchema) ]).optional(),
  verificationStatus: z.union([ z.lazy(() => EnumTransactionVerificationStatusWithAggregatesFilterSchema),z.lazy(() => TransactionVerificationStatusSchema) ]).optional(),
  reconciliationStatus: z.union([ z.lazy(() => EnumTransactionReconciliationStatusWithAggregatesFilterSchema),z.lazy(() => TransactionReconciliationStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => EnumTransactionPriorityWithAggregatesFilterSchema),z.lazy(() => TransactionPrioritySchema) ]).optional(),
  riskLevel: z.union([ z.lazy(() => EnumTransactionRiskLevelWithAggregatesFilterSchema),z.lazy(() => TransactionRiskLevelSchema) ]).optional(),
  categoryTag: z.union([ z.lazy(() => EnumTransactionCategoryTagNullableWithAggregatesFilterSchema),z.lazy(() => TransactionCategoryTagSchema) ]).optional().nullable(),
  categoryId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  categorySlug: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  subcategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  method: z.union([ z.lazy(() => EnumTransactionMethodWithAggregatesFilterSchema),z.lazy(() => TransactionMethodSchema) ]).optional(),
  type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  direction: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  recurring: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  frequency: z.union([ z.lazy(() => EnumTransactionFrequencyNullableWithAggregatesFilterSchema),z.lazy(() => TransactionFrequencySchema) ]).optional().nullable(),
  nextDueDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  recurringRules: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  internal: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  internalTransactionId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  manual: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  needsReview: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  isDisputed: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  isFlagged: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  isReconciled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  isConfidential: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  budgetCategory: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  costCenter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  profitCenter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  departmentCode: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  complianceStatus: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  auditTrail: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  verifiedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  verifiedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastReviewedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  lastReviewedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  reconciliationId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  matchingCriteria: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  reconciliationNotes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  customFields: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  labels: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  notified: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  bankAccountId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  assignedId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default TransactionScalarWhereWithAggregatesInputSchema;
