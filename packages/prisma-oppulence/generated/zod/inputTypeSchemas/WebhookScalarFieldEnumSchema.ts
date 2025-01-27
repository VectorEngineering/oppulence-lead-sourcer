import { z } from 'zod'

export const WebhookScalarFieldEnumSchema = z.enum([
    'id',
    'projectId',
    'installationId',
    'receiver',
    'name',
    'url',
    'secret',
    'triggers',
    'consecutiveFailures',
    'lastFailedAt',
    'disabledAt',
    'maxRetries',
    'lastErrorMessage',
    'createdAt',
    'updatedAt',
    'timeout',
    'status',
    'verificationToken',
    'ipWhitelist',
    'rateLimitPerMinute'
])

export default WebhookScalarFieldEnumSchema
