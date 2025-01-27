import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCompetitiveHistoryIncludeSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryIncludeSchema'
import { LeadCompetitiveHistoryWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereInputSchema'
import { LeadCompetitiveHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryOrderByWithRelationInputSchema'
import { LeadCompetitiveHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryWhereUniqueInputSchema'
import { LeadCompetitiveHistoryScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompetitiveHistoryScalarFieldEnumSchema'
import { LeadCompetitiveAnalysisArgsSchema } from './LeadCompetitiveAnalysisArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadCompetitiveHistorySelectSchema: z.ZodType<Prisma.LeadCompetitiveHistorySelect> = z
    .object({
        id: z.boolean().optional(),
        analysisId: z.boolean().optional(),
        changes: z.boolean().optional(),
        reason: z.boolean().optional(),
        createdBy: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        analysis: z.union([z.boolean(), z.lazy(() => LeadCompetitiveAnalysisArgsSchema)]).optional()
    })
    .strict()

export const LeadCompetitiveHistoryFindManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveHistoryFindManyArgs> = z
    .object({
        select: LeadCompetitiveHistorySelectSchema.optional(),
        include: LeadCompetitiveHistoryIncludeSchema.optional(),
        where: LeadCompetitiveHistoryWhereInputSchema.optional(),
        orderBy: z
            .union([LeadCompetitiveHistoryOrderByWithRelationInputSchema.array(), LeadCompetitiveHistoryOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadCompetitiveHistoryWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadCompetitiveHistoryScalarFieldEnumSchema, LeadCompetitiveHistoryScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadCompetitiveHistoryFindManyArgsSchema
