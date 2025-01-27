import { z } from 'zod';

export const WebhookLogScalarFieldEnumSchema = z.enum(['id','webhookId','requestBody','responseBody','statusCode','duration','success','errorMessage','timestamp']);

export default WebhookLogScalarFieldEnumSchema;
