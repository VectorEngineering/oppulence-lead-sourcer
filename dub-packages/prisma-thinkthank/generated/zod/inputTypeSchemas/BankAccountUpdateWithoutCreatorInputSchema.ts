import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { AccountTypeSchema } from './AccountTypeSchema';
import { NullableEnumAccountTypeFieldUpdateOperationsInputSchema } from './NullableEnumAccountTypeFieldUpdateOperationsInputSchema';
import { AccountSubTypeSchema } from './AccountSubTypeSchema';
import { NullableEnumAccountSubTypeFieldUpdateOperationsInputSchema } from './NullableEnumAccountSubTypeFieldUpdateOperationsInputSchema';
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema';
import { NullableEnumAccountOwnershipTypeFieldUpdateOperationsInputSchema } from './NullableEnumAccountOwnershipTypeFieldUpdateOperationsInputSchema';
import { AccountPurposeSchema } from './AccountPurposeSchema';
import { NullableEnumAccountPurposeFieldUpdateOperationsInputSchema } from './NullableEnumAccountPurposeFieldUpdateOperationsInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';
import { NullableEnumConnectionStatusFieldUpdateOperationsInputSchema } from './NullableEnumConnectionStatusFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { RiskLevelSchema } from './RiskLevelSchema';
import { NullableEnumRiskLevelFieldUpdateOperationsInputSchema } from './NullableEnumRiskLevelFieldUpdateOperationsInputSchema';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { NullableEnumComplianceStatusFieldUpdateOperationsInputSchema } from './NullableEnumComplianceStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateManyWithoutBankAccountNestedInputSchema } from './TagUpdateManyWithoutBankAccountNestedInputSchema';
import { BankConnectionUpdateOneRequiredWithoutBankAccountsNestedInputSchema } from './BankConnectionUpdateOneRequiredWithoutBankAccountsNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutBankAccountNestedInputSchema } from './ProjectUpdateOneRequiredWithoutBankAccountNestedInputSchema';
import { TransactionUpdateManyWithoutBankAccountNestedInputSchema } from './TransactionUpdateManyWithoutBankAccountNestedInputSchema';

export const BankAccountUpdateWithoutCreatorInputSchema: z.ZodType<Prisma.BankAccountUpdateWithoutCreatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountReference: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  accountNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  routingNumber: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mask: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  officialName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  displayName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NullableEnumAccountTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subtype: z.union([ z.lazy(() => AccountSubTypeSchema),z.lazy(() => NullableEnumAccountSubTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownershipType: z.union([ z.lazy(() => AccountOwnershipTypeSchema),z.lazy(() => NullableEnumAccountOwnershipTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purpose: z.union([ z.lazy(() => AccountPurposeSchema),z.lazy(() => NullableEnumAccountPurposeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  balance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  baseBalance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  availableBalance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pendingBalance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  creditLimit: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minBalance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  targetBalance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  overdraftLimit: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  interestRate: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  currency: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  baseCurrency: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exchangeRate: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exchangeRateTimestamp: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  hidden: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  favorite: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  manual: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  verified: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  frozen: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  closeDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  spendingLimit: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dailyLimit: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  monthlyLimit: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  requiresApproval: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  approvalThreshold: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => ConnectionStatusSchema),z.lazy(() => NullableEnumConnectionStatusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorDetails: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorRetries: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastSyncAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nextSyncAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  lastErrorAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  riskLevel: z.union([ z.lazy(() => RiskLevelSchema),z.lazy(() => NullableEnumRiskLevelFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complianceStatus: z.union([ z.lazy(() => ComplianceStatusSchema),z.lazy(() => NullableEnumComplianceStatusFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastReviewDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  nextReviewDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  reviewNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastActivityAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => TagUpdateManyWithoutBankAccountNestedInputSchema).optional(),
  bankConnection: z.lazy(() => BankConnectionUpdateOneRequiredWithoutBankAccountsNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutBankAccountNestedInputSchema).optional(),
  transactions: z.lazy(() => TransactionUpdateManyWithoutBankAccountNestedInputSchema).optional()
}).strict();

export default BankAccountUpdateWithoutCreatorInputSchema;
