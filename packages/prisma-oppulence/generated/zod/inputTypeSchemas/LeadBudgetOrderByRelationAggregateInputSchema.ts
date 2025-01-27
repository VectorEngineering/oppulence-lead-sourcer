import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadBudgetOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LeadBudgetOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadBudgetOrderByRelationAggregateInputSchema;
