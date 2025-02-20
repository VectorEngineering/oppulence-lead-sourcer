import { z } from 'zod'

export const InvoiceStatusSchema = z.enum([
    'processing',
    'completed',
    'failed',
    'draft',
    'sent',
    'viewed',
    'overdue',
    'paid',
    'cancelled',
    'void'
])

export type InvoiceStatusType = `${z.infer<typeof InvoiceStatusSchema>}`

export default InvoiceStatusSchema
