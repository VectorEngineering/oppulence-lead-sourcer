import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveAnalysisUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisUpdateManyMutationInputSchema'
import { LeadCompetitiveAnalysisUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisUncheckedUpdateManyInputSchema'
import { LeadCompetitiveAnalysisWhereInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisWhereInputSchema'

export const LeadCompetitiveAnalysisUpdateManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisUpdateManyArgs> = z.object({
  data: z.union([ LeadCompetitiveAnalysisUpdateManyMutationInputSchema,LeadCompetitiveAnalysisUncheckedUpdateManyInputSchema ]),
  where: LeadCompetitiveAnalysisWhereInputSchema.optional(),
}).strict() ;

export default LeadCompetitiveAnalysisUpdateManyArgsSchema;
