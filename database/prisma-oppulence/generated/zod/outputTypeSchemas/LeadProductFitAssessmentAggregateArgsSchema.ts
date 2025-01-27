import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitAssessmentWhereInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereInputSchema'
import { LeadProductFitAssessmentOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentOrderByWithRelationInputSchema'
import { LeadProductFitAssessmentWhereUniqueInputSchema } from '../inputTypeSchemas/LeadProductFitAssessmentWhereUniqueInputSchema'

export const LeadProductFitAssessmentAggregateArgsSchema: z.ZodType<Prisma.LeadProductFitAssessmentAggregateArgs> = z
    .object({
        where: LeadProductFitAssessmentWhereInputSchema.optional(),
        orderBy: z
            .union([LeadProductFitAssessmentOrderByWithRelationInputSchema.array(), LeadProductFitAssessmentOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadProductFitAssessmentWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadProductFitAssessmentAggregateArgsSchema
