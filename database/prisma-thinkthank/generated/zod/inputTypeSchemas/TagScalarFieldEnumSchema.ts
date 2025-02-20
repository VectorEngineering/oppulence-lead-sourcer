import { z } from 'zod'

export const TagScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'color',
    'createdAt',
    'updatedAt',
    'projectId',
    'context',
    'confidence',
    'metadata'
])

export default TagScalarFieldEnumSchema
