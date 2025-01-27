import { z } from 'zod'

export const LeadExternalSystemOrderByRelevanceFieldEnumSchema = z.enum(['id', 'leadId', 'externalId', 'syncStatus', 'errorMessage'])

export default LeadExternalSystemOrderByRelevanceFieldEnumSchema
