import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadLabelOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadLabelOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadLabelOrderByRelationAggregateInputSchema;
