import { z } from 'zod'

export const InstalledIntegrationScalarFieldEnumSchema = z.enum([
    'id',
    'userId',
    'integrationId',
    'projectId',
    'createdAt',
    'updatedAt',
    'credentials'
])

export default InstalledIntegrationScalarFieldEnumSchema
