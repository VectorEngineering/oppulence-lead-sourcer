import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// INVOICE HISTORY SCHEMA
/////////////////////////////////////////

export const InvoiceHistorySchema = z.object({
    id: z.string().cuid(),
    invoiceId: z.string(),
    action: z.string(),
    description: z.string(),
    changes: JsonValueSchema.nullable(),
    metadata: JsonValueSchema.nullable(),
    createdAt: z.coerce.date(),
    createdBy: z.string().nullish()
})

export type InvoiceHistory = z.infer<typeof InvoiceHistorySchema>

/////////////////////////////////////////
// INVOICE HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvoiceHistoryOptionalDefaultsSchema = InvoiceHistorySchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type InvoiceHistoryOptionalDefaults = z.infer<typeof InvoiceHistoryOptionalDefaultsSchema>

export default InvoiceHistorySchema
