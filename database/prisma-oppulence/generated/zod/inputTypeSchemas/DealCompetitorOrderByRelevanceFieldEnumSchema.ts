import { z } from 'zod'

export const DealCompetitorOrderByRelevanceFieldEnumSchema = z.enum(['id', 'dealId', 'name', 'strengths', 'weaknesses', 'strategy'])

export default DealCompetitorOrderByRelevanceFieldEnumSchema
