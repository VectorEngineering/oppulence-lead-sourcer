import { z } from 'zod'

export const LeadContactPreferenceScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'method',
    'preferredTime',
    'preferredDays',
    'timezone',
    'notes',
    'isActive'
])

export default LeadContactPreferenceScalarFieldEnumSchema
