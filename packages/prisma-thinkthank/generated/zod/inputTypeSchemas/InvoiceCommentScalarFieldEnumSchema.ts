import { z } from 'zod'

export const InvoiceCommentScalarFieldEnumSchema = z.enum([
    'id',
    'invoiceId',
    'content',
    'type',
    'visibility',
    'title',
    'priority',
    'status',
    'tags',
    'metadata',
    'attachments',
    'mentions',
    'formatting',
    'parentId',
    'threadPath',
    'replyCount',
    'isEdited',
    'editedAt',
    'lastReplyAt',
    'resolvedAt',
    'resolvedBy',
    'createdAt',
    'updatedAt',
    'createdBy',
    'updatedBy'
])

export default InvoiceCommentScalarFieldEnumSchema
