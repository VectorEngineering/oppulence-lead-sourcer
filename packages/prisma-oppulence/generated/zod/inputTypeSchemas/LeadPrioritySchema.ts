import { z } from 'zod'

export const LeadPrioritySchema = z.enum(['hot', 'warm', 'cold'])

export type LeadPriorityType = `${z.infer<typeof LeadPrioritySchema>}`

export default LeadPrioritySchema
