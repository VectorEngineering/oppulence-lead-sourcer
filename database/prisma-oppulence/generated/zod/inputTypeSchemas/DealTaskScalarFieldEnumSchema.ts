import { z } from 'zod'

export const DealTaskScalarFieldEnumSchema = z.enum([
    'id',
    'dealId',
    'title',
    'description',
    'dueDate',
    'priority',
    'status',
    'completedAt',
    'assignedToId',
    'createdAt',
    'updatedAt'
])

export default DealTaskScalarFieldEnumSchema
