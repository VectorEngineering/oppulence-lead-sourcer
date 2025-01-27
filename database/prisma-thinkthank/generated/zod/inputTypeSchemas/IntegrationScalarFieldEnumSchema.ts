import { z } from 'zod'

export const IntegrationScalarFieldEnumSchema = z.enum([
    'id',
    'userId',
    'projectId',
    'name',
    'slug',
    'description',
    'readme',
    'developer',
    'website',
    'logo',
    'screenshots',
    'verified',
    'installUrl',
    'createdAt',
    'updatedAt'
])

export default IntegrationScalarFieldEnumSchema
