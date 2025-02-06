import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountTypeSchema } from './AccountTypeSchema';
import { AccountSubTypeSchema } from './AccountSubTypeSchema';
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema';
import { AccountPurposeSchema } from './AccountPurposeSchema';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';
import { RiskLevelSchema } from './RiskLevelSchema';
import { ComplianceStatusSchema } from './ComplianceStatusSchema';
import { TagUncheckedCreateNestedManyWithoutBankAccountInputSchema } from './TagUncheckedCreateNestedManyWithoutBankAccountInputSchema';
import { TransactionUncheckedCreateNestedManyWithoutBankAccountInputSchema } from './TransactionUncheckedCreateNestedManyWithoutBankAccountInputSchema';

export const BankAccountUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.BankAccountUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  accountId: z.string(),
  accountReference: z.string(),
  accountNumber: z.string().optional().nullable(),
  routingNumber: z.string().optional().nullable(),
  mask: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  officialName: z.string().optional().nullable(),
  displayName: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => AccountTypeSchema).optional().nullable(),
  subtype: z.lazy(() => AccountSubTypeSchema).optional().nullable(),
  ownershipType: z.lazy(() => AccountOwnershipTypeSchema).optional().nullable(),
  purpose: z.lazy(() => AccountPurposeSchema).optional().nullable(),
  balance: z.number().optional().nullable(),
  baseBalance: z.number().optional().nullable(),
  availableBalance: z.number().optional().nullable(),
  pendingBalance: z.number().optional().nullable(),
  creditLimit: z.number().optional().nullable(),
  minBalance: z.number().optional().nullable(),
  targetBalance: z.number().optional().nullable(),
  overdraftLimit: z.number().optional().nullable(),
  interestRate: z.number().optional().nullable(),
  currency: z.string().optional().nullable(),
  baseCurrency: z.string().optional().nullable(),
  exchangeRate: z.number().optional().nullable(),
  exchangeRateTimestamp: z.coerce.date().optional().nullable(),
  enabled: z.boolean().optional(),
  hidden: z.boolean().optional(),
  favorite: z.boolean().optional(),
  manual: z.boolean().optional().nullable(),
  verified: z.boolean().optional(),
  frozen: z.boolean().optional(),
  closeDate: z.coerce.date().optional().nullable(),
  spendingLimit: z.number().optional().nullable(),
  dailyLimit: z.number().optional().nullable(),
  monthlyLimit: z.number().optional().nullable(),
  requiresApproval: z.boolean().optional(),
  approvalThreshold: z.number().optional().nullable(),
  status: z.lazy(() => ConnectionStatusSchema).optional().nullable(),
  errorDetails: z.string().optional().nullable(),
  errorRetries: z.number().int().optional().nullable(),
  lastSyncAt: z.coerce.date().optional().nullable(),
  nextSyncAt: z.coerce.date().optional().nullable(),
  errorCount: z.number().int().optional(),
  lastErrorAt: z.coerce.date().optional().nullable(),
  riskLevel: z.lazy(() => RiskLevelSchema).optional().nullable(),
  complianceStatus: z.lazy(() => ComplianceStatusSchema).optional().nullable(),
  lastReviewDate: z.coerce.date().optional().nullable(),
  nextReviewDate: z.coerce.date().optional().nullable(),
  reviewNotes: z.string().optional().nullable(),
  bankConnectionId: z.string(),
  createdBy: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastActivityAt: z.coerce.date().optional().nullable(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutBankAccountInputSchema).optional(),
  transactions: z.lazy(() => TransactionUncheckedCreateNestedManyWithoutBankAccountInputSchema).optional()
}).strict();

export default BankAccountUncheckedCreateWithoutProjectInputSchema;
