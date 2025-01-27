import { z } from 'zod'

/////////////////////////////////////////
// JACKSON STORE SCHEMA
/////////////////////////////////////////

export const jackson_storeSchema = z.object({
    key: z.string(),
    value: z.string(),
    iv: z.string().nullish(),
    tag: z.string().nullish(),
    namespace: z.string().nullish(),
    createdAt: z.coerce.date(),
    modifiedAt: z.coerce.date().nullish()
})

export type jackson_store = z.infer<typeof jackson_storeSchema>

/////////////////////////////////////////
// JACKSON STORE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const jackson_storeOptionalDefaultsSchema = jackson_storeSchema.merge(
    z.object({
        createdAt: z.coerce.date().optional()
    })
)

export type jackson_storeOptionalDefaults = z.infer<typeof jackson_storeOptionalDefaultsSchema>

export default jackson_storeSchema
