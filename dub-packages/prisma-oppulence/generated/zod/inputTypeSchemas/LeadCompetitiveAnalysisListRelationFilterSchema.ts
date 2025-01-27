import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveAnalysisWhereInputSchema } from './LeadCompetitiveAnalysisWhereInputSchema';

export const LeadCompetitiveAnalysisListRelationFilterSchema: z.ZodType<Prisma.LeadCompetitiveAnalysisListRelationFilter> = z.object({
  every: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional(),
  some: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional(),
  none: z.lazy(() => LeadCompetitiveAnalysisWhereInputSchema).optional()
}).strict();

export default LeadCompetitiveAnalysisListRelationFilterSchema;
