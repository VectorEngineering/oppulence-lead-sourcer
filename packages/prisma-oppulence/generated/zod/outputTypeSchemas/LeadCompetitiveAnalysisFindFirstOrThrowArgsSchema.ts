import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveAnalysisIncludeSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisIncludeSchema'
import { LeadCompetitiveAnalysisWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereInputSchema'
import { LeadCompetitiveAnalysisOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisOrderByWithRelationInputSchema'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereUniqueInputSchema'
import { LeadCompetitiveAnalysisScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisScalarFieldEnumSchema'
import { LeadArgsSchema } from './LeadArgsSchema'
import { LeadCompetitiveHistoryFindManyArgsSchema } from './LeadCompetitiveHistoryFindManyArgsSchema'
import { LeadCompetitiveAnalysisCountOutputTypeArgsSchema } from './LeadCompetitiveAnalysisCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCompetitiveAnalysisSelectSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        competitiveLandscape: z.boolean().optional(),
        ourStrengths: z.boolean().optional(),
        ourWeaknesses: z.boolean().optional(),
        competitors: z.boolean().optional(),
        competitorProducts: z.boolean().optional(),
        competitorPricing: z.boolean().optional(),
        winStrategy: z.boolean().optional(),
        differentiators: z.boolean().optional(),
        responseStrategy: z.boolean().optional(),
        competitiveRisks: z.boolean().optional(),
        marketThreats: z.boolean().optional(),
        mitigationPlans: z.boolean().optional(),
        lastUpdated: z.boolean().optional(),
        nextReviewDate: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        analysisHistory: z.union([z.boolean(), z.lazy(() => LeadCompetitiveHistoryFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadCompetitiveAnalysisCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const LeadCompetitiveAnalysisFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisFindFirstOrThrowArgs> = z
    .object({
        select: LeadCompetitiveAnalysisSelectSchema.optional(),
        include: LeadCompetitiveAnalysisIncludeSchema.optional(),
        where: LeadCompetitiveAnalysisWhereInputSchema.optional(),
        orderBy: z
            .union([LeadCompetitiveAnalysisOrderByWithRelationInputSchema.array(), LeadCompetitiveAnalysisOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadCompetitiveAnalysisWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadCompetitiveAnalysisScalarFieldEnumSchema, LeadCompetitiveAnalysisScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadCompetitiveAnalysisFindFirstOrThrowArgsSchema
