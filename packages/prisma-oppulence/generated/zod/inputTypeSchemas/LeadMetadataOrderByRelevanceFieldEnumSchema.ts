import { z } from 'zod'

export const LeadMetadataOrderByRelevanceFieldEnumSchema = z.enum(['id', 'leadId', 'key', 'value', 'type', 'category', 'description'])

export default LeadMetadataOrderByRelevanceFieldEnumSchema
