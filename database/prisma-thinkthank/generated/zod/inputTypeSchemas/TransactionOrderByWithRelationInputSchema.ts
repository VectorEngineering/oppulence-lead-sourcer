import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { TransactionCategoryOrderByWithRelationInputSchema } from './TransactionCategoryOrderByWithRelationInputSchema'
import { BankAccountOrderByWithRelationInputSchema } from './BankAccountOrderByWithRelationInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { TransactionAttachmentOrderByRelationAggregateInputSchema } from './TransactionAttachmentOrderByRelationAggregateInputSchema'
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema'
import { TransactionCommentOrderByRelationAggregateInputSchema } from './TransactionCommentOrderByRelationAggregateInputSchema'
import { TransactionHistoryOrderByRelationAggregateInputSchema } from './TransactionHistoryOrderByRelationAggregateInputSchema'
import { TransactionReconciliationMatchOrderByRelationAggregateInputSchema } from './TransactionReconciliationMatchOrderByRelationAggregateInputSchema'
import { InboxOrderByRelationAggregateInputSchema } from './InboxOrderByRelationAggregateInputSchema'
import { TransactionOrderByRelevanceInputSchema } from './TransactionOrderByRelevanceInputSchema'

export const TransactionOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        note: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        internalNotes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        reference: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        amount: z.lazy(() => SortOrderSchema).optional(),
        baseAmount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        balance: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        exchangeRate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        fees: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        tax: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        taxRate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        currency: z.lazy(() => SortOrderSchema).optional(),
        baseCurrency: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        date: z.lazy(() => SortOrderSchema).optional(),
        valueDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        clearedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        reconciledAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        cancelledAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        verificationStatus: z.lazy(() => SortOrderSchema).optional(),
        reconciliationStatus: z.lazy(() => SortOrderSchema).optional(),
        priority: z.lazy(() => SortOrderSchema).optional(),
        riskLevel: z.lazy(() => SortOrderSchema).optional(),
        categoryTag: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        categoryId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        categorySlug: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        subcategory: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        method: z.lazy(() => SortOrderSchema).optional(),
        type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        direction: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        recurring: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        frequency: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        nextDueDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        recurringRules: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        internal: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        internalTransactionId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        manual: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        needsReview: z.lazy(() => SortOrderSchema).optional(),
        isDisputed: z.lazy(() => SortOrderSchema).optional(),
        isFlagged: z.lazy(() => SortOrderSchema).optional(),
        isReconciled: z.lazy(() => SortOrderSchema).optional(),
        isConfidential: z.lazy(() => SortOrderSchema).optional(),
        budgetCategory: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        costCenter: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        profitCenter: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        departmentCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        complianceStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        auditTrail: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        verifiedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        verifiedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastReviewedBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastReviewedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        reconciliationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        matchingCriteria: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        reconciliationNotes: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        metadata: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        customFields: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        labels: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        notified: z.lazy(() => SortOrderSchema).optional(),
        bankAccountId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        assignedId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional(),
        category: z.lazy(() => TransactionCategoryOrderByWithRelationInputSchema).optional(),
        bankAccount: z.lazy(() => BankAccountOrderByWithRelationInputSchema).optional(),
        assignedTo: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        attachments: z.lazy(() => TransactionAttachmentOrderByRelationAggregateInputSchema).optional(),
        tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
        comments: z.lazy(() => TransactionCommentOrderByRelationAggregateInputSchema).optional(),
        history: z.lazy(() => TransactionHistoryOrderByRelationAggregateInputSchema).optional(),
        reconciliationMatches: z.lazy(() => TransactionReconciliationMatchOrderByRelationAggregateInputSchema).optional(),
        Inbox: z.lazy(() => InboxOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => TransactionOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default TransactionOrderByWithRelationInputSchema
