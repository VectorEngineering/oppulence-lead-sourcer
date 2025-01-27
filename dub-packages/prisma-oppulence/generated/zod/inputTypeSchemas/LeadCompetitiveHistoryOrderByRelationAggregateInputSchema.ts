import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitiveHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCompetitiveHistoryOrderByRelationAggregateInputSchema;
