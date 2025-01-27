import { z } from 'zod'

export const DocumentOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'body',
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
    'mimeType',
    'documentType',
    'version',
    'status',
    'shareableLink',
    'createdBy'
])

export default DocumentOrderByRelevanceFieldEnumSchema
