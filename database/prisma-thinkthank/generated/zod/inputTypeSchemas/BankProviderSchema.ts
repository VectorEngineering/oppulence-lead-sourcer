import { z } from 'zod'

export const BankProviderSchema = z.enum(['gocardless', 'plaid', 'teller', 'stripe', 'manual', 'nordigen', 'truelayer'])

export type BankProviderType = `${z.infer<typeof BankProviderSchema>}`

export default BankProviderSchema
