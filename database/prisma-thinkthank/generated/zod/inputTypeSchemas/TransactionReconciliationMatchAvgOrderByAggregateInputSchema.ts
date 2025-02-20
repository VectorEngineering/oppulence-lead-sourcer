import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TransactionReconciliationMatchAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchAvgOrderByAggregateInput> = z.object({
  confidence: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TransactionReconciliationMatchAvgOrderByAggregateInputSchema;
