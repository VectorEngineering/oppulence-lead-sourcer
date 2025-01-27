import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompetitiveAnalysisSelectSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisSelectSchema';
import { LeadCompetitiveAnalysisIncludeSchema } from '../inputTypeSchemas/LeadCompetitiveAnalysisIncludeSchema';

export const LeadCompetitiveAnalysisArgsSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisDefaultArgs> = z.object({
  select: z.lazy(() => LeadCompetitiveAnalysisSelectSchema).optional(),
  include: z.lazy(() => LeadCompetitiveAnalysisIncludeSchema).optional(),
}).strict();

export default LeadCompetitiveAnalysisArgsSchema;
