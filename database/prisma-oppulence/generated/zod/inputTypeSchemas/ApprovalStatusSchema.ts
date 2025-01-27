import { z } from 'zod'

export const ApprovalStatusSchema = z.enum(['PENDING', 'APPROVED', 'REJECTED', 'REQUIRES_CHANGES'])

export type ApprovalStatusType = `${z.infer<typeof ApprovalStatusSchema>}`

export default ApprovalStatusSchema
