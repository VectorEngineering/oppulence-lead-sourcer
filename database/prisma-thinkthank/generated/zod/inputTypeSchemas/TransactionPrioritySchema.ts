import { z } from 'zod'

export const TransactionPrioritySchema = z.enum(['high', 'medium', 'low'])

export type TransactionPriorityType = `${z.infer<typeof TransactionPrioritySchema>}`

export default TransactionPrioritySchema
