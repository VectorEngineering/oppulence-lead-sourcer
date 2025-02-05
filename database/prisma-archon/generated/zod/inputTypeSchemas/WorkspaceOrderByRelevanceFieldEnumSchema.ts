import { z } from 'zod'

export const WorkspaceOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'description', 'ownerId'])

export default WorkspaceOrderByRelevanceFieldEnumSchema
