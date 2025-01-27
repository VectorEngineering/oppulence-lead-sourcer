import { z } from 'zod'

export const LeadCompetitorOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'name',
    'strengths',
    'weaknesses',
    'pricing',
    'differentiator',
    'status'
])

export default LeadCompetitorOrderByRelevanceFieldEnumSchema
