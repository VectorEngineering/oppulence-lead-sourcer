import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveAnalysisWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereInputSchema'
import { LeadCompetitiveAnalysisOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisOrderByWithRelationInputSchema'
import { LeadCompetitiveAnalysisWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereUniqueInputSchema'

export const LeadCompetitiveAnalysisAggregateArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisAggregateArgs> = z.object({
  where: LeadCompetitiveAnalysisWhereInputSchema.optional(),
  orderBy: z.union([ LeadCompetitiveAnalysisOrderByWithRelationInputSchema.array(),LeadCompetitiveAnalysisOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadCompetitiveAnalysisWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCompetitiveAnalysisAggregateArgsSchema;
