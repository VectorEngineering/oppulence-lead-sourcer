import { z } from 'zod'

export const LeadCommentScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'content',
    'type',
    'visibility',
    'createdAt',
    'updatedAt',
    'createdBy'
])

export default LeadCommentScalarFieldEnumSchema
