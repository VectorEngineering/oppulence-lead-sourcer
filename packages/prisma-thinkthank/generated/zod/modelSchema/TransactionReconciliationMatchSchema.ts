import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// TRANSACTION RECONCILIATION MATCH SCHEMA
/////////////////////////////////////////

export const TransactionReconciliationMatchSchema = z.object({
    id: z.string().cuid(),
    transactionId: z.string(),
    matchedTransactionId: z.string(),
    confidence: z.number(),
    matchType: z.string(),
    status: z.string(),
    notes: z.string().nullish(),
    metadata: JsonValueSchema.nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type TransactionReconciliationMatch = z.infer<typeof TransactionReconciliationMatchSchema>

/////////////////////////////////////////
// TRANSACTION RECONCILIATION MATCH OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionReconciliationMatchOptionalDefaultsSchema = TransactionReconciliationMatchSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type TransactionReconciliationMatchOptionalDefaults = z.infer<typeof TransactionReconciliationMatchOptionalDefaultsSchema>

export default TransactionReconciliationMatchSchema
