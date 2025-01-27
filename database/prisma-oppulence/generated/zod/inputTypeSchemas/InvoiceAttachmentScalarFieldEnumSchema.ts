import { z } from 'zod'

export const InvoiceAttachmentScalarFieldEnumSchema = z.enum([
    'id',
    'invoiceId',
    'name',
    'description',
    'type',
    'path',
    'size',
    'mimeType',
    'metadata',
    'createdAt',
    'updatedAt',
    'createdBy'
])

export default InvoiceAttachmentScalarFieldEnumSchema
