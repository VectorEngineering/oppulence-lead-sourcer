import { z } from 'zod'

/////////////////////////////////////////
// JACKSON INDEX SCHEMA
/////////////////////////////////////////

export const jackson_indexSchema = z.object({
    id: z.number().int(),
    key: z.string(),
    storeKey: z.string()
})

export type jackson_index = z.infer<typeof jackson_indexSchema>

/////////////////////////////////////////
// JACKSON INDEX OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const jackson_indexOptionalDefaultsSchema = jackson_indexSchema.merge(
    z.object({
        id: z.number().int().optional()
    })
)

export type jackson_indexOptionalDefaults = z.infer<typeof jackson_indexOptionalDefaultsSchema>

export default jackson_indexSchema
