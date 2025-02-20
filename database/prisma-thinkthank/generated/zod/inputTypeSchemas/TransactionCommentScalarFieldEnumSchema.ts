import { z } from 'zod'

export const TransactionCommentScalarFieldEnumSchema = z.enum([
    'id',
    'transactionId',
    'content',
    'type',
    'visibility',
    'createdAt',
    'updatedAt',
    'createdBy'
])

export default TransactionCommentScalarFieldEnumSchema
