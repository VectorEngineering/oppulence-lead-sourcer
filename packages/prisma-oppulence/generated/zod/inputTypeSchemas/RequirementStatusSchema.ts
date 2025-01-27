import { z } from 'zod'

export const RequirementStatusSchema = z.enum(['DRAFT', 'IN_REVIEW', 'APPROVED', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED'])

export type RequirementStatusType = `${z.infer<typeof RequirementStatusSchema>}`

export default RequirementStatusSchema
