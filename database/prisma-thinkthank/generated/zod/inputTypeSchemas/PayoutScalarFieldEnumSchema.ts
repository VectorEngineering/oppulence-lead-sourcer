import { z } from 'zod'

export const PayoutScalarFieldEnumSchema = z.enum([
    'id',
    'programId',
    'partnerId',
    'invoiceId',
    'amount',
    'currency',
    'status',
    'type',
    'description',
    'periodStart',
    'periodEnd',
    'quantity',
    'stripeTransferId',
    'createdAt',
    'updatedAt',
    'paidAt'
])

export default PayoutScalarFieldEnumSchema
