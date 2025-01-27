import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { TransactionEnrichmentIncludeSchema } from '../inputTypeSchemas/TransactionEnrichmentIncludeSchema'
import { TransactionEnrichmentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionEnrichmentWhereUniqueInputSchema'
import { ProjectArgsSchema } from './ProjectArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionEnrichmentSelectSchema: z.ZodType<Prisma.TransactionEnrichmentSelect> = z
    .object({
        id: z.boolean().optional(),
        projectId: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        categorySlug: z.boolean().optional(),
        website: z.boolean().optional(),
        merchantId: z.boolean().optional(),
        merchantName: z.boolean().optional(),
        merchantCategory: z.boolean().optional(),
        merchantLocation: z.boolean().optional(),
        merchantLogo: z.boolean().optional(),
        merchantMetadata: z.boolean().optional(),
        confidence: z.boolean().optional(),
        source: z.boolean().optional(),
        status: z.boolean().optional(),
        version: z.boolean().optional(),
        matchingRules: z.boolean().optional(),
        patterns: z.boolean().optional(),
        keywords: z.boolean().optional(),
        sentiment: z.boolean().optional(),
        riskScore: z.boolean().optional(),
        anomalyScore: z.boolean().optional(),
        isRecurring: z.boolean().optional(),
        isSubscription: z.boolean().optional(),
        isBillPayment: z.boolean().optional(),
        isRefund: z.boolean().optional(),
        customData: z.boolean().optional(),
        metadata: z.boolean().optional(),
        system: z.boolean().optional(),
        enabled: z.boolean().optional(),
        priority: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lastAppliedAt: z.boolean().optional(),
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional()
    })
    .strict()

export const TransactionEnrichmentDeleteArgsSchema: z.ZodType<Prisma.TransactionEnrichmentDeleteArgs> = z
    .object({
        select: TransactionEnrichmentSelectSchema.optional(),
        include: TransactionEnrichmentIncludeSchema.optional(),
        where: TransactionEnrichmentWhereUniqueInputSchema
    })
    .strict()

export default TransactionEnrichmentDeleteArgsSchema
