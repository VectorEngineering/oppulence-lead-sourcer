import { z } from 'zod'

export const InboxLabelScalarFieldEnumSchema = z.enum([
    'id',
    'inboxId',
    'name',
    'color',
    'description',
    'metadata',
    'icon',
    'category',
    'priority',
    'isSystem',
    'isRequired',
    'validFrom',
    'validUntil',
    'createdAt',
    'updatedAt',
    'createdBy',
    'updatedBy'
])

export default InboxLabelScalarFieldEnumSchema
