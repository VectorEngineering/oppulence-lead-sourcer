import { z } from 'zod'

export const ComplianceFrameworkSchema = z.enum(['SOC1', 'SOC2', 'ISO27001', 'GDPR', 'HIPAA', 'PCI_DSS', 'NIST', 'CUSTOM'])

export type ComplianceFrameworkType = `${z.infer<typeof ComplianceFrameworkSchema>}`

export default ComplianceFrameworkSchema
