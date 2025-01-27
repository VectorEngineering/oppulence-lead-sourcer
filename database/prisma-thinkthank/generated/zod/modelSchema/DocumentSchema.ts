import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// DOCUMENT SCHEMA
/////////////////////////////////////////

export const DocumentSchema = z.object({
    id: z.string().cuid(),
    body: z.string().nullish(),
    createdAt: z.coerce.date().nullish(),
    metadata: JsonValueSchema.nullable(),
    name: z.string().nullish(),
    objectId: z.string().nullish(),
    ownerId: z.string().nullish(),
    parentId: z.string().nullish(),
    pathTokens: z.string(),
    tag: z.string().nullish(),
    projectId: z.string().nullish(),
    title: z.string().nullish()
})

export type Document = z.infer<typeof DocumentSchema>

/////////////////////////////////////////
// DOCUMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DocumentOptionalDefaultsSchema = DocumentSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type DocumentOptionalDefaults = z.infer<typeof DocumentOptionalDefaultsSchema>

export default DocumentSchema
