import { z } from 'zod'

export const LeadComplianceAuditScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'type',
    'status',
    'findings',
    'requirements',
    'documentation',
    'evidences',
    'riskLevel',
    'riskFactors',
    'mitigationSteps',
    'reviewedBy',
    'reviewedAt',
    'nextReviewDate',
    'createdAt',
    'updatedAt'
])

export default LeadComplianceAuditScalarFieldEnumSchema
