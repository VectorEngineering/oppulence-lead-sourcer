import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionIncludeSchema } from '../inputTypeSchemas/TransactionIncludeSchema'
import { TransactionWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionWhereUniqueInputSchema'
import { TransactionCategoryArgsSchema } from "../outputTypeSchemas/TransactionCategoryArgsSchema"
import { BankAccountArgsSchema } from "../outputTypeSchemas/BankAccountArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { TransactionAttachmentFindManyArgsSchema } from "../outputTypeSchemas/TransactionAttachmentFindManyArgsSchema"
import { TagFindManyArgsSchema } from "../outputTypeSchemas/TagFindManyArgsSchema"
import { TransactionCommentFindManyArgsSchema } from "../outputTypeSchemas/TransactionCommentFindManyArgsSchema"
import { TransactionHistoryFindManyArgsSchema } from "../outputTypeSchemas/TransactionHistoryFindManyArgsSchema"
import { TransactionReconciliationMatchFindManyArgsSchema } from "../outputTypeSchemas/TransactionReconciliationMatchFindManyArgsSchema"
import { InboxFindManyArgsSchema } from "../outputTypeSchemas/InboxFindManyArgsSchema"
import { TransactionCountOutputTypeArgsSchema } from "../outputTypeSchemas/TransactionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionSelectSchema: z.ZodType<Prisma.TransactionSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  note: z.boolean().optional(),
  internalNotes: z.boolean().optional(),
  reference: z.boolean().optional(),
  amount: z.boolean().optional(),
  baseAmount: z.boolean().optional(),
  balance: z.boolean().optional(),
  exchangeRate: z.boolean().optional(),
  fees: z.boolean().optional(),
  tax: z.boolean().optional(),
  taxRate: z.boolean().optional(),
  currency: z.boolean().optional(),
  baseCurrency: z.boolean().optional(),
  date: z.boolean().optional(),
  valueDate: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  clearedAt: z.boolean().optional(),
  reconciledAt: z.boolean().optional(),
  cancelledAt: z.boolean().optional(),
  status: z.boolean().optional(),
  verificationStatus: z.boolean().optional(),
  reconciliationStatus: z.boolean().optional(),
  priority: z.boolean().optional(),
  riskLevel: z.boolean().optional(),
  categoryTag: z.boolean().optional(),
  categoryId: z.boolean().optional(),
  categorySlug: z.boolean().optional(),
  subcategory: z.boolean().optional(),
  method: z.boolean().optional(),
  type: z.boolean().optional(),
  direction: z.boolean().optional(),
  recurring: z.boolean().optional(),
  frequency: z.boolean().optional(),
  nextDueDate: z.boolean().optional(),
  recurringRules: z.boolean().optional(),
  internal: z.boolean().optional(),
  internalTransactionId: z.boolean().optional(),
  manual: z.boolean().optional(),
  needsReview: z.boolean().optional(),
  isDisputed: z.boolean().optional(),
  isFlagged: z.boolean().optional(),
  isReconciled: z.boolean().optional(),
  isConfidential: z.boolean().optional(),
  budgetCategory: z.boolean().optional(),
  costCenter: z.boolean().optional(),
  profitCenter: z.boolean().optional(),
  projectCode: z.boolean().optional(),
  departmentCode: z.boolean().optional(),
  complianceStatus: z.boolean().optional(),
  auditTrail: z.boolean().optional(),
  verifiedBy: z.boolean().optional(),
  verifiedAt: z.boolean().optional(),
  lastReviewedBy: z.boolean().optional(),
  lastReviewedAt: z.boolean().optional(),
  reconciliationId: z.boolean().optional(),
  matchingCriteria: z.boolean().optional(),
  reconciliationNotes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  customFields: z.boolean().optional(),
  labels: z.boolean().optional(),
  notified: z.boolean().optional(),
  bankAccountId: z.boolean().optional(),
  assignedId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  category: z.union([z.boolean(),z.lazy(() => TransactionCategoryArgsSchema)]).optional(),
  bankAccount: z.union([z.boolean(),z.lazy(() => BankAccountArgsSchema)]).optional(),
  assignedTo: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  attachments: z.union([z.boolean(),z.lazy(() => TransactionAttachmentFindManyArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => TagFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => TransactionCommentFindManyArgsSchema)]).optional(),
  history: z.union([z.boolean(),z.lazy(() => TransactionHistoryFindManyArgsSchema)]).optional(),
  reconciliationMatches: z.union([z.boolean(),z.lazy(() => TransactionReconciliationMatchFindManyArgsSchema)]).optional(),
  Inbox: z.union([z.boolean(),z.lazy(() => InboxFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TransactionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TransactionDeleteArgsSchema: z.ZodType<Prisma.TransactionDeleteArgs> = z.object({
  select: TransactionSelectSchema.optional(),
  include: TransactionIncludeSchema.optional(),
  where: TransactionWhereUniqueInputSchema,
}).strict() ;

export default TransactionDeleteArgsSchema;
