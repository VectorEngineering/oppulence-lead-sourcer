import { z } from 'zod';

export const WebhookMethodSchema = z.enum(['POST']);

export type WebhookMethodType = `${z.infer<typeof WebhookMethodSchema>}`

export default WebhookMethodSchema;
