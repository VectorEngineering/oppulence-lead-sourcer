import { z } from 'zod'

export const InvoiceHistoryOrderByRelevanceFieldEnumSchema = z.enum(['id', 'invoiceId', 'action', 'description', 'createdBy'])

export default InvoiceHistoryOrderByRelevanceFieldEnumSchema
