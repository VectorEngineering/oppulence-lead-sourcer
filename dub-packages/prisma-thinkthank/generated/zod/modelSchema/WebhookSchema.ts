import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { WebhookReceiverSchema } from '../inputTypeSchemas/WebhookReceiverSchema'
import { WebhookStatusSchema } from '../inputTypeSchemas/WebhookStatusSchema'

/////////////////////////////////////////
// WEBHOOK SCHEMA
/////////////////////////////////////////

export const WebhookSchema = z.object({
  receiver: WebhookReceiverSchema,
  status: WebhookStatusSchema,
  id: z.string().cuid(),
  projectId: z.string(),
  installationId: z.string().nullish(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  triggers: JsonValueSchema,
  consecutiveFailures: z.number().int(),
  lastFailedAt: z.coerce.date().nullish(),
  disabledAt: z.coerce.date().nullish(),
  maxRetries: z.number().int(),
  lastErrorMessage: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  timeout: z.number().int(),
  verificationToken: z.string().nullish(),
  ipWhitelist: z.string().nullish(),
  rateLimitPerMinute: z.number().int(),
})

export type Webhook = z.infer<typeof WebhookSchema>

/////////////////////////////////////////
// WEBHOOK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WebhookOptionalDefaultsSchema = WebhookSchema.merge(z.object({
  receiver: WebhookReceiverSchema.optional(),
  status: WebhookStatusSchema.optional(),
  id: z.string().cuid().optional(),
  consecutiveFailures: z.number().int().optional(),
  maxRetries: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  timeout: z.number().int().optional(),
  rateLimitPerMinute: z.number().int().optional(),
}))

export type WebhookOptionalDefaults = z.infer<typeof WebhookOptionalDefaultsSchema>

export default WebhookSchema;
