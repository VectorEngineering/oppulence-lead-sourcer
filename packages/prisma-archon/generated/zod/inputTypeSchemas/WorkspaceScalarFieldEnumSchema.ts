import { z } from 'zod'

export const WorkspaceScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'ownerId', 'createdAt', 'updatedAt'])

export default WorkspaceScalarFieldEnumSchema
