import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional(),
  probability: z.lazy(() => SortOrderSchema).optional(),
  weightedAmount: z.lazy(() => SortOrderSchema).optional(),
  actualAmount: z.lazy(() => SortOrderSchema).optional(),
  engagementScore: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadSumOrderByAggregateInputSchema;
