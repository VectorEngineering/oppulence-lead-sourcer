import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadProductFitOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadProductFitOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadProductFitOrderByRelationAggregateInputSchema;
