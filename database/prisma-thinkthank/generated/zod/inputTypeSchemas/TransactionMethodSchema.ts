import { z } from 'zod'

export const TransactionMethodSchema = z.enum([
    'cash',
    'check',
    'wire',
    'ach',
    'credit_card',
    'debit_card',
    'bank_transfer',
    'direct_deposit',
    'payment_gateway',
    'crypto',
    'mobile_payment',
    'other'
])

export type TransactionMethodType = `${z.infer<typeof TransactionMethodSchema>}`

export default TransactionMethodSchema
