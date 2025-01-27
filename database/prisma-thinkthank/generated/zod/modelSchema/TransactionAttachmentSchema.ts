import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// TRANSACTION ATTACHMENT SCHEMA
/////////////////////////////////////////

export const TransactionAttachmentSchema = z.object({
    id: z.string().cuid(),
    transactionId: z.string(),
    name: z.string().nullish(),
    description: z.string().nullish(),
    type: z.string().nullish(),
    category: z.string().nullish(),
    path: z.string(),
    size: z.number().int().nullish(),
    mimeType: z.string().nullish(),
    hash: z.string().nullish(),
    metadata: JsonValueSchema.nullable(),
    isConfidential: z.boolean(),
    status: z.string().nullish(),
    processingErrors: z.string().nullish(),
    ocrText: z.string().nullish(),
    analysisResults: JsonValueSchema.nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    projectId: z.string(),
    blob: JsonValueSchema.nullable()
})

export type TransactionAttachment = z.infer<typeof TransactionAttachmentSchema>

/////////////////////////////////////////
// TRANSACTION ATTACHMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionAttachmentOptionalDefaultsSchema = TransactionAttachmentSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        isConfidential: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type TransactionAttachmentOptionalDefaults = z.infer<typeof TransactionAttachmentOptionalDefaultsSchema>

export default TransactionAttachmentSchema
