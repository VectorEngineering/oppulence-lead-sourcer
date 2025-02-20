import { z } from 'zod'

export const TransactionFrequencySchema = z.enum([
    'daily',
    'weekly',
    'biweekly',
    'monthly',
    'quarterly',
    'semiAnnually',
    'annually',
    'custom',
    'irregular',
    'unknown'
])

export type TransactionFrequencyType = `${z.infer<typeof TransactionFrequencySchema>}`

export default TransactionFrequencySchema
