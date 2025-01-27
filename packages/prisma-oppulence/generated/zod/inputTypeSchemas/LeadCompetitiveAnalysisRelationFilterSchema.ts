import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisWhereInputSchema } from './LeadCompetitiveAnalysisWhereInputSchema';

export const LeadCompetitiveAnalysisRelationFilterSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisRelationFilter> = z.object({
  is: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional(),
  isNot: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisRelationFilterSchema;
