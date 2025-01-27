import { z } from 'zod'

export const TagOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'color', 'projectId', 'context'])

export default TagOrderByRelevanceFieldEnumSchema
