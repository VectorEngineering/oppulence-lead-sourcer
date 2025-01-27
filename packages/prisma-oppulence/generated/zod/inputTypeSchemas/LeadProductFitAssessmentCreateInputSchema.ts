import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { LeadProductFitCreateNestedOneWithoutAssessmentsInputSchema } from './LeadProductFitCreateNestedOneWithoutAssessmentsInputSchema'

export const LeadProductFitAssessmentCreateInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        assessor: z.string(),
        scores: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        notes: z.string(),
        createdAt: z.coerce.date().optional(),
        productFit: z.lazy(() => LeadProductFitCreateNestedOneWithoutAssessmentsInputSchema)
    })
    .strict()

export default LeadProductFitAssessmentCreateInputSchema
