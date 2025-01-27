import { z } from 'zod'

export const LeadExternalSystemScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'provider',
    'externalId',
    'lastSynced',
    'syncStatus',
    'errorMessage'
])

export default LeadExternalSystemScalarFieldEnumSchema
