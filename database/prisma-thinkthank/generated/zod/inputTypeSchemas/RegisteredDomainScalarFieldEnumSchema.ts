import { z } from 'zod'

export const RegisteredDomainScalarFieldEnumSchema = z.enum(['id', 'slug', 'createdAt', 'updatedAt', 'expiresAt', 'projectId', 'domainId'])

export default RegisteredDomainScalarFieldEnumSchema
