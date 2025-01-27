import { z } from 'zod'

export const DealActivityScalarFieldEnumSchema = z.enum([
    'id',
    'dealId',
    'type',
    'title',
    'description',
    'outcome',
    'duration',
    'scheduledAt',
    'completedAt',
    'createdAt',
    'updatedAt',
    'createdBy'
])

export default DealActivityScalarFieldEnumSchema
