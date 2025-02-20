import { z } from 'zod'

export const ExchangeRateScalarFieldEnumSchema = z.enum(['id', 'baseCurrency', 'targetCurrency', 'rate', 'createdAt', 'updatedAt'])

export default ExchangeRateScalarFieldEnumSchema
