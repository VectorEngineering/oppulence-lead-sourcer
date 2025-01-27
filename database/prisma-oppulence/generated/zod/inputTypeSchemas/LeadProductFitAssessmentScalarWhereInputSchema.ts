import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonFilterSchema } from './JsonFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const LeadProductFitAssessmentScalarWhereInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema),
                z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => LeadProductFitAssessmentScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema),
                z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        productFitId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        assessor: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        scores: z.lazy(() => JsonFilterSchema).optional(),
        notes: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default LeadProductFitAssessmentScalarWhereInputSchema
