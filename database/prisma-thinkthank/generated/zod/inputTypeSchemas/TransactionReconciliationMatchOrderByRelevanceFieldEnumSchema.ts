import { z } from 'zod'

export const TransactionReconciliationMatchOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'transactionId',
    'matchedTransactionId',
    'matchType',
    'status',
    'notes'
])

export default TransactionReconciliationMatchOrderByRelevanceFieldEnumSchema
