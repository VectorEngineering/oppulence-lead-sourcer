import { z } from 'zod';

export const WebhookLogOrderByRelevanceFieldEnumSchema = z.enum(['id','webhookId','errorMessage']);

export default WebhookLogOrderByRelevanceFieldEnumSchema;
