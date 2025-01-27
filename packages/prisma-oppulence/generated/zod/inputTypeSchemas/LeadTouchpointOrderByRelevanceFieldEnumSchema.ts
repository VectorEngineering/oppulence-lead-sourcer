import { z } from 'zod'

export const LeadTouchpointOrderByRelevanceFieldEnumSchema = z.enum(['id', 'leadId', 'channel', 'campaign', 'content', 'interaction'])

export default LeadTouchpointOrderByRelevanceFieldEnumSchema
