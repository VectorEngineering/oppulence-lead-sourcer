import { z } from 'zod'

export const TransactionOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'name',
    'description',
    'note',
    'internalNotes',
    'reference',
    'currency',
    'baseCurrency',
    'categoryId',
    'categorySlug',
    'subcategory',
    'type',
    'direction',
    'internalTransactionId',
    'budgetCategory',
    'costCenter',
    'profitCenter',
    'projectCode',
    'departmentCode',
    'complianceStatus',
    'verifiedBy',
    'lastReviewedBy',
    'reconciliationId',
    'reconciliationNotes',
    'bankAccountId',
    'assignedId',
    'projectId'
])

export default TransactionOrderByRelevanceFieldEnumSchema
