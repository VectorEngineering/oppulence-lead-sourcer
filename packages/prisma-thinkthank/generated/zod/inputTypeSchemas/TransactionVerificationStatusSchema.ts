import { z } from 'zod'

export const TransactionVerificationStatusSchema = z.enum(['unverified', 'pending', 'verified', 'flagged', 'rejected'])

export type TransactionVerificationStatusType = `${z.infer<typeof TransactionVerificationStatusSchema>}`

export default TransactionVerificationStatusSchema
