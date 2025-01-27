import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            productFitId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            assessor: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            scores: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
            notes: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
        })
        .strict()

export default LeadProductFitAssessmentScalarWhereWithAggregatesInputSchema
