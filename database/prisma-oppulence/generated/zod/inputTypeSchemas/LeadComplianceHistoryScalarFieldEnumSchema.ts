import { z } from 'zod'

export const LeadComplianceHistoryScalarFieldEnumSchema = z.enum([
    'id',
    'complianceAuditId',
    'action',
    'status',
    'notes',
    'performedBy',
    'createdAt'
])

export default LeadComplianceHistoryScalarFieldEnumSchema
