import { z } from 'zod'

export const ComplianceStatusSchema = z.enum(['COMPLIANT', 'PENDING_REVIEW', 'NON_COMPLIANT', 'EXEMPTED'])

export type ComplianceStatusType = `${z.infer<typeof ComplianceStatusSchema>}`

export default ComplianceStatusSchema
