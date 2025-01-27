import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadProductFitIncludeSchema } from '../inputTypeSchemas/LeadProductFitIncludeSchema'
import { LeadProductFitWhereUniqueInputSchema } from '../inputTypeSchemas/LeadProductFitWhereUniqueInputSchema'
import { LeadProductFitCreateInputSchema } from '../inputTypeSchemas/LeadProductFitCreateInputSchema'
import { LeadProductFitUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadProductFitUncheckedCreateInputSchema'
import { LeadProductFitUpdateInputSchema } from '../inputTypeSchemas/LeadProductFitUpdateInputSchema'
import { LeadProductFitUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadProductFitUncheckedUpdateInputSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
import { LeadProductFitAssessmentFindManyArgsSchema } from './LeadProductFitAssessmentFindManyArgsSchema'
import { LeadProductFitCountOutputTypeArgsSchema } from './LeadProductFitCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadProductFitSelectSchema: z.ZodType<Prisma.LeadProductFitSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        technicalFit: z.boolean().optional(),
        businessFit: z.boolean().optional(),
        culturalFit: z.boolean().optional(),
        budgetFit: z.boolean().optional(),
        overallFit: z.boolean().optional(),
        strengthsWeaknesses: z.boolean().optional(),
        customizationNeeds: z.boolean().optional(),
        implementationComplexity: z.boolean().optional(),
        requiredFeatures: z.boolean().optional(),
        optionalFeatures: z.boolean().optional(),
        dealBreakers: z.boolean().optional(),
        integrationComplexity: z.boolean().optional(),
        integrationRisks: z.boolean().optional(),
        integrationCosts: z.boolean().optional(),
        implementationTimeline: z.boolean().optional(),
        trainingNeeds: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        assessments: z.union([z.boolean(), z.lazy(() => LeadProductFitAssessmentFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadProductFitCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadProductFitUpsertArgsSchema: z.ZodType<Prisma.LeadProductFitUpsertArgs> = z
    .object({
        select: LeadProductFitSelectSchema.optional(),
        include: LeadProductFitIncludeSchema.optional(),
        where: LeadProductFitWhereUniqueInputSchema,
        create: z.union([LeadProductFitCreateInputSchema, LeadProductFitUncheckedCreateInputSchema]),
        update: z.union([LeadProductFitUpdateInputSchema, LeadProductFitUncheckedUpdateInputSchema])
    })
    .strict()

export default LeadProductFitUpsertArgsSchema
