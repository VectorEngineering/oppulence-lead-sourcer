import { z } from 'zod'

/////////////////////////////////////////
// EXCHANGE RATE SCHEMA
/////////////////////////////////////////

export const ExchangeRateSchema = z.object({
    id: z.string().cuid(),
    baseCurrency: z.string().nullish(),
    targetCurrency: z.string().nullish(),
    rate: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type ExchangeRate = z.infer<typeof ExchangeRateSchema>

/////////////////////////////////////////
// EXCHANGE RATE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ExchangeRateOptionalDefaultsSchema = ExchangeRateSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ExchangeRateOptionalDefaults = z.infer<typeof ExchangeRateOptionalDefaultsSchema>

export default ExchangeRateSchema
