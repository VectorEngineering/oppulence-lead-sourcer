import { z } from 'zod';

export const WebhookReceiverSchema = z.enum(['user','zapier','make','slack','segment']);

export type WebhookReceiverType = `${z.infer<typeof WebhookReceiverSchema>}`

export default WebhookReceiverSchema;
