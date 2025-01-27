import { z } from 'zod'

export const InvoiceSizeSchema = z.enum(['a4', 'letter', 'legal', 'custom'])

export type InvoiceSizeType = `${z.infer<typeof InvoiceSizeSchema>}`

export default InvoiceSizeSchema
