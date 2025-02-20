import { z } from 'zod'

export const TransactionStatusSchema = z.enum([
    'pending',
    'posted',
    'cleared',
    'voided',
    'failed',
    'cancelled',
    'onHold',
    'disputed',
    'refunded',
    'completed',
    'archived'
])

export type TransactionStatusType = `${z.infer<typeof TransactionStatusSchema>}`

export default TransactionStatusSchema
