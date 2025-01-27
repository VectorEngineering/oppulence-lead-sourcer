import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            leadId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            competitiveLandscape: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            ourStrengths: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            ourWeaknesses: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            competitors: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            competitorProducts: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            competitorPricing: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            winStrategy: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            differentiators: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            responseStrategy: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            competitiveRisks: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            marketThreats: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            mitigationPlans: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            lastUpdated: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            nextReviewDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
            updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
        })
        .strict()

export default LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema
