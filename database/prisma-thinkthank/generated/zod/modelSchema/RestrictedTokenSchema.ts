import { z } from 'zod'

/////////////////////////////////////////
// RESTRICTED TOKEN SCHEMA
/////////////////////////////////////////

export const RestrictedTokenSchema = z.object({
    id: z.string().cuid(),
    name: z.string(),
    hashedKey: z.string(),
    partialKey: z.string(),
    scopes: z.string().nullish(),
    expires: z.coerce.date().nullish(),
    lastUsed: z.coerce.date().nullish(),
    rateLimit: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    userId: z.string(),
    projectId: z.string(),
    installationId: z.string().nullish()
})

export type RestrictedToken = z.infer<typeof RestrictedTokenSchema>

/////////////////////////////////////////
// RESTRICTED TOKEN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RestrictedTokenOptionalDefaultsSchema = RestrictedTokenSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        rateLimit: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type RestrictedTokenOptionalDefaults = z.infer<typeof RestrictedTokenOptionalDefaultsSchema>

export default RestrictedTokenSchema
