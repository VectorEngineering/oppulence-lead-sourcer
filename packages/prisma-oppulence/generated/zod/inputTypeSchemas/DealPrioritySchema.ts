import { z } from 'zod'

export const DealPrioritySchema = z.enum(['low', 'medium', 'high', 'critical'])

export type DealPriorityType = `${z.infer<typeof DealPrioritySchema>}`

export default DealPrioritySchema
