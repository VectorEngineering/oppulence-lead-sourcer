import { z } from 'zod'

export const TokenScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'hashedKey',
    'partialKey',
    'expires',
    'lastUsed',
    'createdAt',
    'updatedAt',
    'userId'
])

export default TokenScalarFieldEnumSchema
