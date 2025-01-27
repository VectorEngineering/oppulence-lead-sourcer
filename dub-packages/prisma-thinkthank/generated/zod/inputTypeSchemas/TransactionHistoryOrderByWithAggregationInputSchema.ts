import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TransactionHistoryCountOrderByAggregateInputSchema } from './TransactionHistoryCountOrderByAggregateInputSchema';
import { TransactionHistoryMaxOrderByAggregateInputSchema } from './TransactionHistoryMaxOrderByAggregateInputSchema';
import { TransactionHistoryMinOrderByAggregateInputSchema } from './TransactionHistoryMinOrderByAggregateInputSchema';

export const TransactionHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionHistoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transactionId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  changes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => TransactionHistoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TransactionHistoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TransactionHistoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default TransactionHistoryOrderByWithAggregationInputSchema;
