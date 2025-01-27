import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadOrderByRelationAggregateInputSchema;
