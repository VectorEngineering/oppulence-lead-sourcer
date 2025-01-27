import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveAnalysisCreateManyInputSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisCreateManyInputSchema'

export const LeadCompetitiveAnalysisCreateManyArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisCreateManyArgs> = z.object({
  data: z.union([ LeadCompetitiveAnalysisCreateManyInputSchema,LeadCompetitiveAnalysisCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadCompetitiveAnalysisCreateManyArgsSchema;
