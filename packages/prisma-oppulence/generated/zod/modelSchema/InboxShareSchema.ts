import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INBOX SHARE SCHEMA
/////////////////////////////////////////

export const InboxShareSchema = z.object({
    id: z.string().cuid(),
    inboxId: z.string(),
    userId: z.string().nullish(),
    email: z.string().nullish(),
    accessLevel: z.string(),
    expiresAt: z.coerce.date().nullish(),
    password: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    lastAccessed: z.coerce.date().nullish(),
    accessCount: z.number().int(),
    maxAccesses: z.number().int().nullish(),
    ipRestriction: z.string().nullish(),
    domainRestriction: z.string().nullish(),
    deviceLimit: z.number().int().nullish(),
    requireMFA: z.boolean(),
    notifyOnAccess: z.boolean(),
    accessSchedule: JsonValueSchema.nullable(),
    revokedAt: z.coerce.date().nullish(),
    revokedBy: z.string().nullish(),
    revokeReason: z.string().nullish()
})

export type InboxShare = z.infer<typeof InboxShareSchema>

/////////////////////////////////////////
// INBOX SHARE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InboxShareOptionalDefaultsSchema = InboxShareSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        accessCount: z.number().int().optional(),
        requireMFA: z.boolean().optional(),
        notifyOnAccess: z.boolean().optional()
    })
)

export type InboxShareOptionalDefaults = z.infer<typeof InboxShareOptionalDefaultsSchema>

export default InboxShareSchema
