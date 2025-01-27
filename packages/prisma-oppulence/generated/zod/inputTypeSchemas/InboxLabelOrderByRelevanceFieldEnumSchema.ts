import { z } from 'zod'

export const InboxLabelOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'inboxId',
    'name',
    'color',
    'description',
    'icon',
    'category',
    'createdBy',
    'updatedBy'
])

export default InboxLabelOrderByRelevanceFieldEnumSchema
