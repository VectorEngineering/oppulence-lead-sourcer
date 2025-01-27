import { z } from 'zod'

/////////////////////////////////////////
// JACKSON TTL SCHEMA
/////////////////////////////////////////

export const jackson_ttlSchema = z.object({
    key: z.string(),
    expiresAt: z.bigint()
})

export type jackson_ttl = z.infer<typeof jackson_ttlSchema>

/////////////////////////////////////////
// JACKSON TTL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const jackson_ttlOptionalDefaultsSchema = jackson_ttlSchema.merge(z.object({}))

export type jackson_ttlOptionalDefaults = z.infer<typeof jackson_ttlOptionalDefaultsSchema>

export default jackson_ttlSchema
