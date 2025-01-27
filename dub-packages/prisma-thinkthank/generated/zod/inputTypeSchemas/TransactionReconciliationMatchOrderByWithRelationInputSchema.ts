import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TransactionOrderByWithRelationInputSchema } from './TransactionOrderByWithRelationInputSchema';
import { TransactionReconciliationMatchOrderByRelevanceInputSchema } from './TransactionReconciliationMatchOrderByRelevanceInputSchema';

export const TransactionReconciliationMatchOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transactionId: z.lazy(() => SortOrderSchema).optional(),
  matchedTransactionId: z.lazy(() => SortOrderSchema).optional(),
  confidence: z.lazy(() => SortOrderSchema).optional(),
  matchType: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  transaction: z.lazy(() => TransactionOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TransactionReconciliationMatchOrderByRelevanceInputSchema).optional()
}).strict();

export default TransactionReconciliationMatchOrderByWithRelationInputSchema;
