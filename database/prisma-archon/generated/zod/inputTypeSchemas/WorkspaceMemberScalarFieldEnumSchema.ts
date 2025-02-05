import { z } from 'zod'

export const WorkspaceMemberScalarFieldEnumSchema = z.enum(['id', 'workspaceId', 'userId', 'role', 'createdAt', 'updatedAt'])

export default WorkspaceMemberScalarFieldEnumSchema
