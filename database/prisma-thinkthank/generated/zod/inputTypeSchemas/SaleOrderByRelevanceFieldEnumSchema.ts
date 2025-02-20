import { z } from 'zod'

export const SaleOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'programId',
    'partnerId',
    'payoutId',
    'customerId',
    'linkId',
    'clickId',
    'invoiceId',
    'eventId',
    'currency',
    'paymentProcessor'
])

export default SaleOrderByRelevanceFieldEnumSchema
