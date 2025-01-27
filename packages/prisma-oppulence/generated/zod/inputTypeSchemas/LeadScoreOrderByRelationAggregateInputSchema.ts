import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadScoreOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadScoreOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadScoreOrderByRelationAggregateInputSchema;
