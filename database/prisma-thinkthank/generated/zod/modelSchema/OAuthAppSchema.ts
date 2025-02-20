import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// O AUTH APP SCHEMA
/////////////////////////////////////////

export const OAuthAppSchema = z.object({
    id: z.string().cuid(),
    integrationId: z.string(),
    clientId: z.string(),
    hashedClientSecret: z.string(),
    partialClientSecret: z.string(),
    redirectUris: JsonValueSchema,
    pkce: z.boolean()
})

export type OAuthApp = z.infer<typeof OAuthAppSchema>

/////////////////////////////////////////
// O AUTH APP OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const OAuthAppOptionalDefaultsSchema = OAuthAppSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        pkce: z.boolean().optional()
    })
)

export type OAuthAppOptionalDefaults = z.infer<typeof OAuthAppOptionalDefaultsSchema>

export default OAuthAppSchema
