import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankAccountIncludeSchema } from '../inputTypeSchemas/BankAccountIncludeSchema'
import { BankAccountWhereInputSchema } from '../inputTypeSchemas/BankAccountWhereInputSchema'
import { BankAccountOrderByWithRelationInputSchema } from '../inputTypeSchemas/BankAccountOrderByWithRelationInputSchema'
import { BankAccountWhereUniqueInputSchema } from '../inputTypeSchemas/BankAccountWhereUniqueInputSchema'
import { BankAccountScalarFieldEnumSchema } from '../inputTypeSchemas/BankAccountScalarFieldEnumSchema'
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { BankConnectionArgsSchema } from "../outputTypeSchemas/BankConnectionArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TransactionFindManyArgsSchema } from "../outputTypeSchemas/TransactionFindManyArgsSchema"
import { BankAccountCountOutputTypeArgsSchema } from "../outputTypeSchemas/BankAccountCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BankAccountSelectSchema: z.ZodType<Prisma.BankAccountSelect> = z.object({
  id: z.boolean().optional(),
  accountId: z.boolean().optional(),
  accountReference: z.boolean().optional(),
  accountNumber: z.boolean().optional(),
  routingNumber: z.boolean().optional(),
  mask: z.boolean().optional(),
  name: z.boolean().optional(),
  officialName: z.boolean().optional(),
  displayName: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  subtype: z.boolean().optional(),
  ownershipType: z.boolean().optional(),
  purpose: z.boolean().optional(),
  balance: z.boolean().optional(),
  baseBalance: z.boolean().optional(),
  availableBalance: z.boolean().optional(),
  pendingBalance: z.boolean().optional(),
  creditLimit: z.boolean().optional(),
  minBalance: z.boolean().optional(),
  targetBalance: z.boolean().optional(),
  overdraftLimit: z.boolean().optional(),
  interestRate: z.boolean().optional(),
  currency: z.boolean().optional(),
  baseCurrency: z.boolean().optional(),
  exchangeRate: z.boolean().optional(),
  exchangeRateTimestamp: z.boolean().optional(),
  enabled: z.boolean().optional(),
  hidden: z.boolean().optional(),
  favorite: z.boolean().optional(),
  manual: z.boolean().optional(),
  verified: z.boolean().optional(),
  frozen: z.boolean().optional(),
  closeDate: z.boolean().optional(),
  spendingLimit: z.boolean().optional(),
  dailyLimit: z.boolean().optional(),
  monthlyLimit: z.boolean().optional(),
  requiresApproval: z.boolean().optional(),
  approvalThreshold: z.boolean().optional(),
  status: z.boolean().optional(),
  errorDetails: z.boolean().optional(),
  errorRetries: z.boolean().optional(),
  lastSyncAt: z.boolean().optional(),
  nextSyncAt: z.boolean().optional(),
  errorCount: z.boolean().optional(),
  lastErrorAt: z.boolean().optional(),
  riskLevel: z.boolean().optional(),
  complianceStatus: z.boolean().optional(),
  lastReviewDate: z.boolean().optional(),
  nextReviewDate: z.boolean().optional(),
  reviewNotes: z.boolean().optional(),
  bankConnectionId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lastActivityAt: z.boolean().optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  bankConnection: z.union([z.boolean(),z.lazy(() => BankConnectionArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  creator: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  transactions: z.union([z.boolean(),z.lazy(() => TransactionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BankAccountCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BankAccountFindFirstArgsSchema: z.ZodType<Prisma.BankAccountFindFirstArgs> = z.object({
  select: BankAccountSelectSchema.optional(),
  include: BankAccountIncludeSchema.optional(),
  where: BankAccountWhereInputSchema.optional(),
  orderBy: z.union([ BankAccountOrderByWithRelationInputSchema.array(),BankAccountOrderByWithRelationInputSchema ]).optional(),
  cursor: BankAccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BankAccountScalarFieldEnumSchema,BankAccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BankAccountFindFirstArgsSchema;
