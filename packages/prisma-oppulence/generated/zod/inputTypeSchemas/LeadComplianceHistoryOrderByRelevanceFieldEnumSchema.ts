import { z } from 'zod'

export const LeadComplianceHistoryOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'complianceAuditId',
    'action',
    'status',
    'notes',
    'performedBy'
])

export default LeadComplianceHistoryOrderByRelevanceFieldEnumSchema
