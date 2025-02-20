import { z } from 'zod'

export const DocumentAnnotationOrderByRelevanceFieldEnumSchema = z.enum(['id', 'documentId', 'type', 'content', 'color', 'createdBy'])

export default DocumentAnnotationOrderByRelevanceFieldEnumSchema
