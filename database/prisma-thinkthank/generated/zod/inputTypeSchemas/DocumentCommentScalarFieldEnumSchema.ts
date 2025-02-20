import { z } from 'zod'

export const DocumentCommentScalarFieldEnumSchema = z.enum([
    'id',
    'documentId',
    'content',
    'type',
    'status',
    'parentCommentId',
    'createdAt',
    'updatedAt',
    'createdBy',
    'updatedBy'
])

export default DocumentCommentScalarFieldEnumSchema
