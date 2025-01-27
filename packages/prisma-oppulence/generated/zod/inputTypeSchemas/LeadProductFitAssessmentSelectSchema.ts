import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitArgsSchema } from '../outputTypeSchemas/LeadProductFitArgsSchema'

export const LeadProductFitAssessmentSelectSchema: z.ZodType<Prisma.LeadProductFitAssessmentSelect> = z
    .object({
        id: z.boolean().optional(),
        productFitId: z.boolean().optional(),
        assessor: z.boolean().optional(),
        scores: z.boolean().optional(),
        notes: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        productFit: z.union([z.boolean(), z.lazy(() => LeadProductFitArgsSchema)]).optional()
    })
    .strict()

export default LeadProductFitAssessmentSelectSchema
