import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { TransactionStatusSchema } from './TransactionStatusSchema'
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema'
import { TransactionReconciliationStatusSchema } from './TransactionReconciliationStatusSchema'
import { TransactionPrioritySchema } from './TransactionPrioritySchema'
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema'
import { TransactionCategoryTagSchema } from './TransactionCategoryTagSchema'
import { TransactionMethodSchema } from './TransactionMethodSchema'
import { TransactionFrequencySchema } from './TransactionFrequencySchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const TransactionCreateManyCategoryInputSchema: z.ZodType<Prisma.TransactionCreateManyCategoryInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        note: z.string().optional().nullable(),
        internalNotes: z.string().optional().nullable(),
        reference: z.string().optional().nullable(),
        amount: z.number(),
        baseAmount: z.number().optional().nullable(),
        balance: z.number().optional().nullable(),
        exchangeRate: z.number().optional().nullable(),
        fees: z.number().optional().nullable(),
        tax: z.number().optional().nullable(),
        taxRate: z.number().optional().nullable(),
        currency: z.string(),
        baseCurrency: z.string().optional().nullable(),
        date: z.coerce.date(),
        valueDate: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        clearedAt: z.coerce.date().optional().nullable(),
        reconciledAt: z.coerce.date().optional().nullable(),
        cancelledAt: z.coerce.date().optional().nullable(),
        status: z.lazy(() => TransactionStatusSchema).optional(),
        verificationStatus: z.lazy(() => TransactionVerificationStatusSchema).optional(),
        reconciliationStatus: z.lazy(() => TransactionReconciliationStatusSchema).optional(),
        priority: z.lazy(() => TransactionPrioritySchema).optional(),
        riskLevel: z.lazy(() => TransactionRiskLevelSchema).optional(),
        categoryTag: z
            .lazy(() => TransactionCategoryTagSchema)
            .optional()
            .nullable(),
        categorySlug: z.string().optional().nullable(),
        subcategory: z.string().optional().nullable(),
        method: z.lazy(() => TransactionMethodSchema),
        type: z.string().optional().nullable(),
        direction: z.string().optional().nullable(),
        recurring: z.boolean().optional().nullable(),
        frequency: z
            .lazy(() => TransactionFrequencySchema)
            .optional()
            .nullable(),
        nextDueDate: z.coerce.date().optional().nullable(),
        recurringRules: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        internal: z.boolean().optional().nullable(),
        internalTransactionId: z.string().optional().nullable(),
        manual: z.boolean().optional().nullable(),
        needsReview: z.boolean().optional(),
        isDisputed: z.boolean().optional(),
        isFlagged: z.boolean().optional(),
        isReconciled: z.boolean().optional(),
        isConfidential: z.boolean().optional(),
        budgetCategory: z.string().optional().nullable(),
        costCenter: z.string().optional().nullable(),
        profitCenter: z.string().optional().nullable(),
        projectCode: z.string().optional().nullable(),
        departmentCode: z.string().optional().nullable(),
        complianceStatus: z.string().optional().nullable(),
        auditTrail: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        verifiedBy: z.string().optional().nullable(),
        verifiedAt: z.coerce.date().optional().nullable(),
        lastReviewedBy: z.string().optional().nullable(),
        lastReviewedAt: z.coerce.date().optional().nullable(),
        reconciliationId: z.string().optional().nullable(),
        matchingCriteria: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        reconciliationNotes: z.string().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        customFields: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        labels: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        notified: z.boolean().optional(),
        bankAccountId: z.string().optional().nullable(),
        assignedId: z.string().optional().nullable(),
        projectId: z.string()
    })
    .strict()

export default TransactionCreateManyCategoryInputSchema
