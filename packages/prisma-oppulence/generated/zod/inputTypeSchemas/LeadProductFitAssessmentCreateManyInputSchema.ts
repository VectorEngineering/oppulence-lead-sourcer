import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const LeadProductFitAssessmentCreateManyInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        productFitId: z.string(),
        assessor: z.string(),
        scores: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]),
        notes: z.string(),
        createdAt: z.coerce.date().optional()
    })
    .strict()

export default LeadProductFitAssessmentCreateManyInputSchema
