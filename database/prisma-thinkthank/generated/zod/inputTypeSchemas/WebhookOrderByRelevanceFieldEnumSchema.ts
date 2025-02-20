import { z } from 'zod'

export const WebhookOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'projectId',
    'installationId',
    'name',
    'url',
    'secret',
    'lastErrorMessage',
    'verificationToken',
    'ipWhitelist'
])

export default WebhookOrderByRelevanceFieldEnumSchema
