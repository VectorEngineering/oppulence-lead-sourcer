import { z } from 'zod'

export const ComplianceTypeSchema = z.enum(['GDPR', 'HIPAA', 'SOX', 'PCI', 'CCPA', 'CUSTOM'])

export type ComplianceTypeType = `${z.infer<typeof ComplianceTypeSchema>}`

export default ComplianceTypeSchema
