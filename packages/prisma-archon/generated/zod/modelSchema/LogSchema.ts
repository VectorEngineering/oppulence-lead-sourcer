import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { LogTypeSchema } from '../inputTypeSchemas/LogTypeSchema'
import { LogPostTypeSchema } from '../inputTypeSchemas/LogPostTypeSchema'

/////////////////////////////////////////
// LOG SCHEMA
/////////////////////////////////////////

export const LogSchema = z.object({
    type: LogTypeSchema.nullish(),
    postType: LogPostTypeSchema.nullish(),
    id: z.string().cuid(),
    endpointId: z.string(),
    message: JsonValueSchema,
    createdAt: z.coerce.date()
})

export type Log = z.infer<typeof LogSchema>

/////////////////////////////////////////
// LOG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LogOptionalDefaultsSchema = LogSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type LogOptionalDefaults = z.infer<typeof LogOptionalDefaultsSchema>

export default LogSchema
