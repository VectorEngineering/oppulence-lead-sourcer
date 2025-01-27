import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitAssessmentWhereInputSchema } from './LeadProductFitAssessmentWhereInputSchema'

export const LeadProductFitAssessmentListRelationFilterSchema: z.ZodType<Prisma.LeadProductFitAssessmentListRelationFilter> = z
    .object({
        every: z.lazy(() => LeadProductFitAssessmentWhereInputSchema).optional(),
        some: z.lazy(() => LeadProductFitAssessmentWhereInputSchema).optional(),
        none: z.lazy(() => LeadProductFitAssessmentWhereInputSchema).optional()
    })
    .strict()

export default LeadProductFitAssessmentListRelationFilterSchema
