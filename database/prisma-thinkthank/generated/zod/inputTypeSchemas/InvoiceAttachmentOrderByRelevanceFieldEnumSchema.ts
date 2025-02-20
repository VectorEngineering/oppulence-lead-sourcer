import { z } from 'zod'

export const InvoiceAttachmentOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'invoiceId',
    'name',
    'description',
    'type',
    'path',
    'mimeType',
    'createdBy'
])

export default InvoiceAttachmentOrderByRelevanceFieldEnumSchema
