import { z } from 'zod'

export const CustomerTagOrderByRelevanceFieldEnumSchema = z.enum(['id', 'customerId', 'tagId', 'projectId'])

export default CustomerTagOrderByRelevanceFieldEnumSchema
