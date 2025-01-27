import { z } from 'zod'

export const DealActivityOrderByRelevanceFieldEnumSchema = z.enum(['id', 'dealId', 'title', 'description', 'outcome', 'createdBy'])

export default DealActivityOrderByRelevanceFieldEnumSchema
