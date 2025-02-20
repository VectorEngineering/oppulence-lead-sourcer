import { z } from 'zod';
import { AccountTypeSchema } from '../inputTypeSchemas/AccountTypeSchema'
import { AccountSubTypeSchema } from '../inputTypeSchemas/AccountSubTypeSchema'
import { AccountOwnershipTypeSchema } from '../inputTypeSchemas/AccountOwnershipTypeSchema'
import { AccountPurposeSchema } from '../inputTypeSchemas/AccountPurposeSchema'
import { ConnectionStatusSchema } from '../inputTypeSchemas/ConnectionStatusSchema'
import { RiskLevelSchema } from '../inputTypeSchemas/RiskLevelSchema'
import { ComplianceStatusSchema } from '../inputTypeSchemas/ComplianceStatusSchema'

/////////////////////////////////////////
// BANK ACCOUNT SCHEMA
/////////////////////////////////////////

export const BankAccountSchema = z.object({
  type: AccountTypeSchema.nullish(),
  subtype: AccountSubTypeSchema.nullish(),
  ownershipType: AccountOwnershipTypeSchema.nullish(),
  purpose: AccountPurposeSchema.nullish(),
  status: ConnectionStatusSchema,
  riskLevel: RiskLevelSchema,
  complianceStatus: ComplianceStatusSchema,
  id: z.string().cuid(),
  accountId: z.string(),
  accountReference: z.string(),
  accountNumber: z.string().nullish(),
  routingNumber: z.string().nullish(),
  mask: z.string().nullish(),
  name: z.string().nullish(),
  officialName: z.string().nullish(),
  displayName: z.string().nullish(),
  description: z.string().nullish(),
  balance: z.number().nullish(),
  baseBalance: z.number().nullish(),
  availableBalance: z.number().nullish(),
  pendingBalance: z.number().nullish(),
  creditLimit: z.number().nullish(),
  minBalance: z.number().nullish(),
  targetBalance: z.number().nullish(),
  overdraftLimit: z.number().nullish(),
  interestRate: z.number().nullish(),
  currency: z.string().nullish(),
  baseCurrency: z.string().nullish(),
  exchangeRate: z.number().nullish(),
  exchangeRateTimestamp: z.coerce.date().nullish(),
  enabled: z.boolean(),
  hidden: z.boolean(),
  favorite: z.boolean(),
  manual: z.boolean().nullish(),
  verified: z.boolean(),
  frozen: z.boolean(),
  closeDate: z.coerce.date().nullish(),
  spendingLimit: z.number().nullish(),
  dailyLimit: z.number().nullish(),
  monthlyLimit: z.number().nullish(),
  requiresApproval: z.boolean(),
  approvalThreshold: z.number().nullish(),
  errorDetails: z.string().nullish(),
  errorRetries: z.number().int().nullish(),
  lastSyncAt: z.coerce.date().nullish(),
  nextSyncAt: z.coerce.date().nullish(),
  errorCount: z.number().int(),
  lastErrorAt: z.coerce.date().nullish(),
  lastReviewDate: z.coerce.date().nullish(),
  nextReviewDate: z.coerce.date().nullish(),
  reviewNotes: z.string().nullish(),
  bankConnectionId: z.string(),
  projectId: z.string(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  lastActivityAt: z.coerce.date().nullish(),
})

export type BankAccount = z.infer<typeof BankAccountSchema>

/////////////////////////////////////////
// BANK ACCOUNT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BankAccountOptionalDefaultsSchema = BankAccountSchema.merge(z.object({
  status: ConnectionStatusSchema.optional(),
  riskLevel: RiskLevelSchema.optional(),
  complianceStatus: ComplianceStatusSchema.optional(),
  id: z.string().cuid().optional(),
  enabled: z.boolean().optional(),
  hidden: z.boolean().optional(),
  favorite: z.boolean().optional(),
  verified: z.boolean().optional(),
  frozen: z.boolean().optional(),
  requiresApproval: z.boolean().optional(),
  errorCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type BankAccountOptionalDefaults = z.infer<typeof BankAccountOptionalDefaultsSchema>

export default BankAccountSchema;
