import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveAnalysisWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereInputSchema'

export const LeadCompetitiveAnalysisDeleteManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisDeleteManyArgs> = z.object({
  where: LeadCompetitiveAnalysisWhereInputSchema.optional(),
}).strict() ;

export default LeadCompetitiveAnalysisDeleteManyArgsSchema;
