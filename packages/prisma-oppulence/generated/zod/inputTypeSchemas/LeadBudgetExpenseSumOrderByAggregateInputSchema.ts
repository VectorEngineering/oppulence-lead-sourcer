import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadBudgetExpenseSumOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetExpenseSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadBudgetExpenseSumOrderByAggregateInputSchema;
