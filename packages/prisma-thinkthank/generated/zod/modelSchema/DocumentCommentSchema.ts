import { z } from 'zod'

/////////////////////////////////////////
// DOCUMENT COMMENT SCHEMA
/////////////////////////////////////////

export const DocumentCommentSchema = z.object({
    id: z.string().cuid(),
    documentId: z.string(),
    content: z.string(),
    type: z.string().nullish(),
    status: z.string().nullish(),
    parentCommentId: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdBy: z.string().nullish(),
    updatedBy: z.string().nullish()
})

export type DocumentComment = z.infer<typeof DocumentCommentSchema>

/////////////////////////////////////////
// DOCUMENT COMMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DocumentCommentOptionalDefaultsSchema = DocumentCommentSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type DocumentCommentOptionalDefaults = z.infer<typeof DocumentCommentOptionalDefaultsSchema>

export default DocumentCommentSchema
