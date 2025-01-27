import { z } from 'zod'

export const RestrictedTokenScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'hashedKey',
    'partialKey',
    'scopes',
    'expires',
    'lastUsed',
    'rateLimit',
    'createdAt',
    'updatedAt',
    'userId',
    'projectId',
    'installationId'
])

export default RestrictedTokenScalarFieldEnumSchema
