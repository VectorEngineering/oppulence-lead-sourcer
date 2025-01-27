import { z } from 'zod'

export const LeadCompetitorScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'name',
    'strengths',
    'weaknesses',
    'pricing',
    'differentiator',
    'status'
])

export default LeadCompetitorScalarFieldEnumSchema
