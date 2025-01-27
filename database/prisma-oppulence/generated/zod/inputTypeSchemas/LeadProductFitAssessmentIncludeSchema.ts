import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitArgsSchema } from '../outputTypeSchemas/LeadProductFitArgsSchema'

export const LeadProductFitAssessmentIncludeSchema: z.ZodType<Prisma.LeadProductFitAssessmentInclude> = z
    .object({
        productFit: z.union([z.boolean(), z.lazy(() => LeadProductFitArgsSchema)]).optional()
    })
    .strict()

export default LeadProductFitAssessmentIncludeSchema
