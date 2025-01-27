import { z } from 'zod'

export const ProjectUsersScalarFieldEnumSchema = z.enum(['id', 'role', 'createdAt', 'updatedAt', 'userId', 'projectId'])

export default ProjectUsersScalarFieldEnumSchema
