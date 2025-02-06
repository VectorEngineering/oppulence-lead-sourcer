import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TransactionOrderByWithRelationInputSchema } from './TransactionOrderByWithRelationInputSchema';
import { TransactionCommentOrderByRelevanceInputSchema } from './TransactionCommentOrderByRelevanceInputSchema';

export const TransactionCommentOrderByWithRelationInputSchema: z.ZodType<Prisma.TransactionCommentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  transactionId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  visibility: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  transaction: z.lazy(() => TransactionOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => TransactionCommentOrderByRelevanceInputSchema).optional()
}).strict();

export default TransactionCommentOrderByWithRelationInputSchema;
