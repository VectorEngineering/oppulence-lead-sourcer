import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreHistoryWhereInputSchema } from './LeadScoreHistoryWhereInputSchema';

export const LeadScoreHistoryListRelationFilterSchema: z.ZodType<Prisma.LeadScoreHistoryListRelationFilter> = z.object({
  every: z.lazy(() => LeadScoreHistoryWhereInputSchema).optional(),
  some: z.lazy(() => LeadScoreHistoryWhereInputSchema).optional(),
  none: z.lazy(() => LeadScoreHistoryWhereInputSchema).optional()
}).strict();

export default LeadScoreHistoryListRelationFilterSchema;
