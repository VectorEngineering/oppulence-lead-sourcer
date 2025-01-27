import { z } from 'zod'

export const TransactionHistoryScalarFieldEnumSchema = z.enum([
    'id',
    'transactionId',
    'action',
    'description',
    'changes',
    'metadata',
    'createdAt',
    'createdBy'
])

export default TransactionHistoryScalarFieldEnumSchema
