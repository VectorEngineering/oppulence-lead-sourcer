import { z } from 'zod'

export const PayoutOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'programId',
    'partnerId',
    'invoiceId',
    'currency',
    'description',
    'stripeTransferId'
])

export default PayoutOrderByRelevanceFieldEnumSchema
