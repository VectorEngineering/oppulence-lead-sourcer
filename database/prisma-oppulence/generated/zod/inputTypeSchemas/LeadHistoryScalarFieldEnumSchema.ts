import { z } from 'zod'

export const LeadHistoryScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'action',
    'description',
    'changes',
    'metadata',
    'createdAt',
    'createdBy',
    'changeType',
    'source',
    'ipAddress',
    'userAgent'
])

export default LeadHistoryScalarFieldEnumSchema
