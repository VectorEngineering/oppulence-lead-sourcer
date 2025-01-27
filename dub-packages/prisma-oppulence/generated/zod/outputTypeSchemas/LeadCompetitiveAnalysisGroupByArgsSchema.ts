import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveAnalysisWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereInputSchema'
import { LeadCompetitiveAnalysisOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisOrderByWithAggregationInputSchema'
import { LeadCompetitiveAnalysisScalarFieldEnumSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisScalarFieldEnumSchema'
import { LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema'

export const LeadCompetitiveAnalysisGroupByArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisGroupByArgs> = z.object({
  where: LeadCompetitiveAnalysisWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompetitiveAnalysisOrderByWithAggregationInputSchema.array(),LeadCompetitiveAnalysisOrderByWithAggregationInputSchema ]).optional(),
  by: LeadCompetitiveAnalysisScalarFieldEnumSchema.array(),
  having: LeadCompetitiveAnalysisScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompetitiveAnalysisGroupByArgsSchema;
