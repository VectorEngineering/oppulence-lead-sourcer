import { z } from 'zod'

export const InboxActivityScalarFieldEnumSchema = z.enum([
    'id',
    'inboxId',
    'action',
    'description',
    'metadata',
    'createdAt',
    'createdBy',
    'ipAddress',
    'userAgent',
    'sessionId',
    'requestId',
    'success',
    'errorDetails',
    'severity',
    'source',
    'location',
    'deviceInfo',
    'riskScore'
])

export default InboxActivityScalarFieldEnumSchema
