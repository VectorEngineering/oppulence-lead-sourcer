import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const TransactionEnrichmentCreateManyProjectInputSchema: z.ZodType<Prisma.TransactionEnrichmentCreateManyProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        categorySlug: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        merchantId: z.string().optional().nullable(),
        merchantName: z.string().optional().nullable(),
        merchantCategory: z.string().optional().nullable(),
        merchantLocation: z.string().optional().nullable(),
        merchantLogo: z.string().optional().nullable(),
        merchantMetadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        confidence: z.number().optional().nullable(),
        source: z.string().optional().nullable(),
        status: z.string().optional().nullable(),
        version: z.string().optional().nullable(),
        matchingRules: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        patterns: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        keywords: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        sentiment: z.string().optional().nullable(),
        riskScore: z.number().optional().nullable(),
        anomalyScore: z.number().optional().nullable(),
        isRecurring: z.boolean().optional().nullable(),
        isSubscription: z.boolean().optional().nullable(),
        isBillPayment: z.boolean().optional().nullable(),
        isRefund: z.boolean().optional().nullable(),
        customData: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        system: z.boolean().optional().nullable(),
        enabled: z.boolean().optional(),
        priority: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        lastAppliedAt: z.coerce.date().optional().nullable()
    })
    .strict()

export default TransactionEnrichmentCreateManyProjectInputSchema
