import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumAccountTypeNullableWithAggregatesFilterSchema } from './EnumAccountTypeNullableWithAggregatesFilterSchema';
import { AccountTypeSchema } from './AccountTypeSchema';
import { EnumAccountSubTypeNullableWithAggregatesFilterSchema } from './EnumAccountSubTypeNullableWithAggregatesFilterSchema';
import { AccountSubTypeSchema } from './AccountSubTypeSchema';
import { EnumAccountOwnershipTypeNullableWithAggregatesFilterSchema } from './EnumAccountOwnershipTypeNullableWithAggregatesFilterSchema';
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema';
import { EnumAccountPurposeNullableWithAggregatesFilterSchema } from './EnumAccountPurposeNullableWithAggregatesFilterSchema';
import { AccountPurposeSchema } from './AccountPurposeSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { EnumConnectionStatusNullableWithAggregatesFilterSchema } from './EnumConnectionStatusNullableWithAggregatesFilterSchema';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumRiskLevelNullableWithAggregatesFilterSchema } from './EnumRiskLevelNullableWithAggregatesFilterSchema';
import { RiskLevelSchema } from './RiskLevelSchema';
import { EnumComplianceStatusNullableWithAggregatesFilterSchema } from './EnumComplianceStatusNullableWithAggregatesFilterSchema';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BankAccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BankAccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema),z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema),z.lazy(() => BankAccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountReference: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accountNumber: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  routingNumber: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  mask: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  officialName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  displayName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumAccountTypeNullableWithAggregatesFilterSchema),z.lazy(() => AccountTypeSchema) ]).optional().nullable(),
  subtype: z.union([ z.lazy(() => EnumAccountSubTypeNullableWithAggregatesFilterSchema),z.lazy(() => AccountSubTypeSchema) ]).optional().nullable(),
  ownershipType: z.union([ z.lazy(() => EnumAccountOwnershipTypeNullableWithAggregatesFilterSchema),z.lazy(() => AccountOwnershipTypeSchema) ]).optional().nullable(),
  purpose: z.union([ z.lazy(() => EnumAccountPurposeNullableWithAggregatesFilterSchema),z.lazy(() => AccountPurposeSchema) ]).optional().nullable(),
  balance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  baseBalance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  availableBalance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  pendingBalance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  creditLimit: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  minBalance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  targetBalance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  overdraftLimit: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  interestRate: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  currency: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  baseCurrency: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  exchangeRate: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  exchangeRateTimestamp: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  enabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  hidden: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  favorite: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  manual: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  verified: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  frozen: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  closeDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  spendingLimit: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  dailyLimit: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  monthlyLimit: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  requiresApproval: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  approvalThreshold: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumConnectionStatusNullableWithAggregatesFilterSchema),z.lazy(() => ConnectionStatusSchema) ]).optional().nullable(),
  errorDetails: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  errorRetries: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  lastSyncAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextSyncAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  errorCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  lastErrorAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  riskLevel: z.union([ z.lazy(() => EnumRiskLevelNullableWithAggregatesFilterSchema),z.lazy(() => RiskLevelSchema) ]).optional().nullable(),
  complianceStatus: z.union([ z.lazy(() => EnumComplianceStatusNullableWithAggregatesFilterSchema),z.lazy(() => ComplianceStatusSchema) ]).optional().nullable(),
  lastReviewDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextReviewDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  reviewNotes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  bankConnectionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastActivityAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default BankAccountScalarWhereWithAggregatesInputSchema;
