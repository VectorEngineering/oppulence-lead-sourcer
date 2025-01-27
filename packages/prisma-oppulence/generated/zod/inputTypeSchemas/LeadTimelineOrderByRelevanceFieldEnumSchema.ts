import { z } from 'zod'

export const LeadTimelineOrderByRelevanceFieldEnumSchema = z.enum(['id', 'leadId', 'milestone', 'status', 'notes'])

export default LeadTimelineOrderByRelevanceFieldEnumSchema
