import { z } from 'zod'

export const LeadDecisionMakerOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'name',
    'title',
    'email',
    'phone',
    'influence',
    'notes'
])

export default LeadDecisionMakerOrderByRelevanceFieldEnumSchema
