import { z } from 'zod'

export const LeadComplianceAuditOrderByRelevanceFieldEnumSchema = z.enum(['id', 'leadId', 'findings', 'riskLevel', 'reviewedBy'])

export default LeadComplianceAuditOrderByRelevanceFieldEnumSchema
