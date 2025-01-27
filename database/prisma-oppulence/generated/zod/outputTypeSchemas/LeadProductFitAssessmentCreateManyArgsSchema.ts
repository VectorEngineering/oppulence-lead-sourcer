import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitAssessmentCreateManyInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentCreateManyInputSchema'

export const LeadProductFitAssessmentCreateManyArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentCreateManyArgs> = z
    .object({
        data: z.union([LeadProductFitAssessmentCreateManyInputSchema, LeadProductFitAssessmentCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadProductFitAssessmentCreateManyArgsSchema
