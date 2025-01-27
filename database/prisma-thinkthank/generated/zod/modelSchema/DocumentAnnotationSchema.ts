import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// DOCUMENT ANNOTATION SCHEMA
/////////////////////////////////////////

export const DocumentAnnotationSchema = z.object({
    id: z.string().cuid(),
    documentId: z.string(),
    type: z.string(),
    content: z.string(),
    pageNumber: z.number().int().nullish(),
    coordinates: JsonValueSchema.nullable(),
    color: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdBy: z.string().nullish()
})

export type DocumentAnnotation = z.infer<typeof DocumentAnnotationSchema>

/////////////////////////////////////////
// DOCUMENT ANNOTATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DocumentAnnotationOptionalDefaultsSchema = DocumentAnnotationSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type DocumentAnnotationOptionalDefaults = z.infer<typeof DocumentAnnotationOptionalDefaultsSchema>

export default DocumentAnnotationSchema
