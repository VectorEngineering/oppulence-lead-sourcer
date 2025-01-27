import { z } from 'zod'

export const SaleStatusSchema = z.enum(['pending', 'processed', 'paid', 'refunded', 'duplicate', 'fraud'])

export type SaleStatusType = `${z.infer<typeof SaleStatusSchema>}`

export default SaleStatusSchema
