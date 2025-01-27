import { z } from 'zod'

export const TransactionAttachmentOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'transactionId',
    'name',
    'description',
    'type',
    'category',
    'path',
    'mimeType',
    'hash',
    'status',
    'processingErrors',
    'ocrText',
    'projectId'
])

export default TransactionAttachmentOrderByRelevanceFieldEnumSchema
