import { z } from 'zod'

export const WebhookStatusSchema = z.enum(['ACTIVE', 'DISABLED', 'PENDING_VERIFICATION'])

export type WebhookStatusType = `${z.infer<typeof WebhookStatusSchema>}`

export default WebhookStatusSchema
