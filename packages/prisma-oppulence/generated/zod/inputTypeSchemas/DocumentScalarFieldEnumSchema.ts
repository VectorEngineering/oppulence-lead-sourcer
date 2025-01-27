import { z } from 'zod'

export const DocumentScalarFieldEnumSchema = z.enum([
    'id',
    'body',
    'createdAt',
    'metadata',
    'name',
    'objectId',
    'ownerId',
    'parentId',
    'pathTokens',
    'tag',
    'projectId',
    'title',
    'description',
    'type',
    'url',
    'size',
    'mimeType',
    'isConfidential',
    'documentType',
    'version',
    'status',
    'updatedAt',
    'expiryDate',
    'shareableLink',
    'createdBy'
])

export default DocumentScalarFieldEnumSchema
