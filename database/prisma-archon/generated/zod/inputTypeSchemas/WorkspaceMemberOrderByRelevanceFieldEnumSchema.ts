import { z } from 'zod'

export const WorkspaceMemberOrderByRelevanceFieldEnumSchema = z.enum(['id', 'workspaceId', 'userId', 'role'])

export default WorkspaceMemberOrderByRelevanceFieldEnumSchema
