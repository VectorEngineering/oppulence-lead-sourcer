import { z } from 'zod'

export const TransactionAttachmentScalarFieldEnumSchema = z.enum([
    'id',
    'transactionId',
    'name',
    'description',
    'type',
    'category',
    'path',
    'size',
    'mimeType',
    'hash',
    'metadata',
    'isConfidential',
    'status',
    'processingErrors',
    'ocrText',
    'analysisResults',
    'createdAt',
    'updatedAt',
    'projectId',
    'blob'
])

export default TransactionAttachmentScalarFieldEnumSchema
