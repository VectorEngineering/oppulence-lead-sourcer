import { z } from 'zod'

export const InvoiceHistoryScalarFieldEnumSchema = z.enum([
    'id',
    'invoiceId',
    'action',
    'description',
    'changes',
    'metadata',
    'createdAt',
    'createdBy'
])

export default InvoiceHistoryScalarFieldEnumSchema
