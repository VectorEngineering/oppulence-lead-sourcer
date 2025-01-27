import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadScoreWhereInputSchema } from './LeadScoreWhereInputSchema';

export const LeadScoreListRelationFilterSchema: z.ZodType<Prisma.LeadScoreListRelationFilter> = z.object({
  every: z.lazy(() => LeadScoreWhereInputSchema).optional(),
  some: z.lazy(() => LeadScoreWhereInputSchema).optional(),
  none: z.lazy(() => LeadScoreWhereInputSchema).optional()
}).strict();

export default LeadScoreListRelationFilterSchema;
