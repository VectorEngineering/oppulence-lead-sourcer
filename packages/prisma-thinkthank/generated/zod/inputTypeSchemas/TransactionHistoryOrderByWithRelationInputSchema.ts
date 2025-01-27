import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TransactionOrderByWithRelationInputSchema } from './TransactionOrderByWithRelationInputSchema';
import { TransactionHistoryOrderByRelevanceInputSchema } from './TransactionHistoryOrderByRelevanceInputSchema';

export const TransactionHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionHistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transactionId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  changes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transaction: z.lazy(() => TransactionOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TransactionHistoryOrderByRelevanceInputSchema).optional()
}).strict();

export default TransactionHistoryOrderByWithRelationInputSchema;
