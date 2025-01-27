import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// TRANSACTION ENRICHMENT SCHEMA
/////////////////////////////////////////

export const TransactionEnrichmentSchema = z.object({
    id: z.string().cuid(),
    projectId: z.string(),
    name: z.string().nullish(),
    description: z.string().nullish(),
    categorySlug: z.string().nullish(),
    website: z.string().nullish(),
    merchantId: z.string().nullish(),
    merchantName: z.string().nullish(),
    merchantCategory: z.string().nullish(),
    merchantLocation: z.string().nullish(),
    merchantLogo: z.string().nullish(),
    merchantMetadata: JsonValueSchema.nullable(),
    confidence: z.number().nullish(),
    source: z.string().nullish(),
    status: z.string().nullish(),
    version: z.string().nullish(),
    matchingRules: JsonValueSchema.nullable(),
    patterns: JsonValueSchema.nullable(),
    keywords: JsonValueSchema.nullable(),
    sentiment: z.string().nullish(),
    riskScore: z.number().nullish(),
    anomalyScore: z.number().nullish(),
    isRecurring: z.boolean().nullish(),
    isSubscription: z.boolean().nullish(),
    isBillPayment: z.boolean().nullish(),
    isRefund: z.boolean().nullish(),
    customData: JsonValueSchema.nullable(),
    metadata: JsonValueSchema.nullable(),
    system: z.boolean().nullish(),
    enabled: z.boolean(),
    priority: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    lastAppliedAt: z.coerce.date().nullish()
})

export type TransactionEnrichment = z.infer<typeof TransactionEnrichmentSchema>

/////////////////////////////////////////
// TRANSACTION ENRICHMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TransactionEnrichmentOptionalDefaultsSchema = TransactionEnrichmentSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        enabled: z.boolean().optional(),
        priority: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type TransactionEnrichmentOptionalDefaults = z.infer<typeof TransactionEnrichmentOptionalDefaultsSchema>

export default TransactionEnrichmentSchema
