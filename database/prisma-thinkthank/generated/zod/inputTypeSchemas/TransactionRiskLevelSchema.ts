import { z } from 'zod'

export const TransactionRiskLevelSchema = z.enum(['low', 'medium', 'high', 'critical'])

export type TransactionRiskLevelType = `${z.infer<typeof TransactionRiskLevelSchema>}`

export default TransactionRiskLevelSchema
