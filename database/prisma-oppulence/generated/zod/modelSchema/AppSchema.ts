import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// APP SCHEMA
/////////////////////////////////////////

export const AppSchema = z.object({
    id: z.string().cuid(),
    appId: z.string(),
    config: JsonValueSchema.nullable(),
    createdAt: z.coerce.date(),
    createdBy: z.string().nullish(),
    settings: JsonValueSchema.nullable(),
    userId: z.string(),
    projectId: z.string()
})

export type App = z.infer<typeof AppSchema>

/////////////////////////////////////////
// APP OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AppOptionalDefaultsSchema = AppSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type AppOptionalDefaults = z.infer<typeof AppOptionalDefaultsSchema>

export default AppSchema
