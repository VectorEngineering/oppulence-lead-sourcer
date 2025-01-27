import { z } from 'zod'

export const LeadRequirementOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'category',
    'priority',
    'description',
    'status',
    'notes'
])

export default LeadRequirementOrderByRelevanceFieldEnumSchema
