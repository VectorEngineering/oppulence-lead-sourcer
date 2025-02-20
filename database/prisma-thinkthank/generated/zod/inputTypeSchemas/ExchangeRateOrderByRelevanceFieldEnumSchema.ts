import { z } from 'zod'

export const ExchangeRateOrderByRelevanceFieldEnumSchema = z.enum(['id', 'baseCurrency', 'targetCurrency'])

export default ExchangeRateOrderByRelevanceFieldEnumSchema
