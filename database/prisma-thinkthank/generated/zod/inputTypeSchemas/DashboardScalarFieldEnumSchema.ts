import { z } from 'zod'

export const DashboardScalarFieldEnumSchema = z.enum([
    'id',
    'linkId',
    'projectId',
    'userId',
    'doIndex',
    'password',
    'showConversions',
    'createdAt',
    'updatedAt'
])

export default DashboardScalarFieldEnumSchema
