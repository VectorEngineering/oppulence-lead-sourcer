import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// WEBHOOK LOG SCHEMA
/////////////////////////////////////////

export const WebhookLogSchema = z.object({
    id: z.string().cuid(),
    webhookId: z.string(),
    requestBody: JsonValueSchema.nullable(),
    responseBody: JsonValueSchema.nullable(),
    statusCode: z.number().int().nullish(),
    duration: z.number().int(),
    success: z.boolean(),
    errorMessage: z.string().nullish(),
    timestamp: z.coerce.date()
})

export type WebhookLog = z.infer<typeof WebhookLogSchema>

/////////////////////////////////////////
// WEBHOOK LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WebhookLogOptionalDefaultsSchema = WebhookLogSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        timestamp: z.coerce.date().optional()
    })
)

export type WebhookLogOptionalDefaults = z.infer<typeof WebhookLogOptionalDefaultsSchema>

export default WebhookLogSchema
