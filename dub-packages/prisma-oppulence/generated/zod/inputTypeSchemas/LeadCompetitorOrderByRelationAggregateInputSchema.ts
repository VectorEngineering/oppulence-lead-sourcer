import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadCompetitorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadCompetitorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadCompetitorOrderByRelationAggregateInputSchema;
