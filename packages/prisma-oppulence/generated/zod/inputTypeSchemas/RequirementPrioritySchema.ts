import { z } from 'zod'

export const RequirementPrioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'])

export type RequirementPriorityType = `${z.infer<typeof RequirementPrioritySchema>}`

export default RequirementPrioritySchema
