import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitAssessmentWhereInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereInputSchema'

export const LeadProductFitAssessmentDeleteManyArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentDeleteManyArgs> = z
    .object({
        where: LeadProductFitAssessmentWhereInputSchema.optional()
    })
    .strict()

export default LeadProductFitAssessmentDeleteManyArgsSchema
