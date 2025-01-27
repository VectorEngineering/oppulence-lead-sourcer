import { z } from 'zod'

export const InvoiceCommentTypeSchema = z.enum(['general', 'internal', 'payment', 'dispute', 'reminder', 'status_change', 'system'])

export type InvoiceCommentTypeType = `${z.infer<typeof InvoiceCommentTypeSchema>}`

export default InvoiceCommentTypeSchema
