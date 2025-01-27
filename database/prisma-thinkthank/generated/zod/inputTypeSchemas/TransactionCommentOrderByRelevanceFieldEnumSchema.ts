import { z } from 'zod'

export const TransactionCommentOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'transactionId',
    'content',
    'type',
    'visibility',
    'createdBy'
])

export default TransactionCommentOrderByRelevanceFieldEnumSchema
