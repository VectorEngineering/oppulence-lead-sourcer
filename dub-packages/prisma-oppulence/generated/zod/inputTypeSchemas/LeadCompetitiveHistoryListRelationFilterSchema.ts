import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompetitiveHistoryWhereInputSchema } from './LeadCompetitiveHistoryWhereInputSchema';

export const LeadCompetitiveHistoryListRelationFilterSchema: z.ZodType<Prisma.LeadCompetitiveHistoryListRelationFilter> = z.object({
  every: z.lazy(() => LeadCompetitiveHistoryWhereInputSchema).optional(),
  some: z.lazy(() => LeadCompetitiveHistoryWhereInputSchema).optional(),
  none: z.lazy(() => LeadCompetitiveHistoryWhereInputSchema).optional()
}).strict();

export default LeadCompetitiveHistoryListRelationFilterSchema;
