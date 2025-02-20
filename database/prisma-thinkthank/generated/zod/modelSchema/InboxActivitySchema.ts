import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INBOX ACTIVITY SCHEMA
/////////////////////////////////////////

export const InboxActivitySchema = z.object({
    id: z.string().cuid(),
    inboxId: z.string(),
    action: z.string(),
    description: z.string(),
    metadata: JsonValueSchema.nullable(),
    createdAt: z.coerce.date(),
    createdBy: z.string().nullish(),
    ipAddress: z.string().nullish(),
    userAgent: z.string().nullish(),
    sessionId: z.string().nullish(),
    requestId: z.string().nullish(),
    success: z.boolean(),
    errorDetails: JsonValueSchema.nullable(),
    severity: z.string().nullish(),
    source: z.string().nullish(),
    location: z.string().nullish(),
    deviceInfo: JsonValueSchema.nullable(),
    riskScore: z.number().nullish()
})

export type InboxActivity = z.infer<typeof InboxActivitySchema>

/////////////////////////////////////////
// INBOX ACTIVITY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InboxActivityOptionalDefaultsSchema = InboxActivitySchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        success: z.boolean().optional()
    })
)

export type InboxActivityOptionalDefaults = z.infer<typeof InboxActivityOptionalDefaultsSchema>

export default InboxActivitySchema
