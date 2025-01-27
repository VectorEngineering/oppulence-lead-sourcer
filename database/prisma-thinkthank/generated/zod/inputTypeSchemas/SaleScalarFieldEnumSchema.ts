import { z } from 'zod'

export const SaleScalarFieldEnumSchema = z.enum([
    'id',
    'programId',
    'partnerId',
    'payoutId',
    'customerId',
    'linkId',
    'clickId',
    'invoiceId',
    'eventId',
    'amount',
    'currency',
    'paymentProcessor',
    'earnings',
    'status',
    'metadata',
    'commissionAmount',
    'commissionType',
    'recurringCommission',
    'recurringInterval',
    'recurringDuration',
    'isLifetimeRecurring',
    'createdAt',
    'updatedAt'
])

export default SaleScalarFieldEnumSchema
