import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TransactionCategoryCountOrderByAggregateInputSchema } from './TransactionCategoryCountOrderByAggregateInputSchema';
import { TransactionCategoryAvgOrderByAggregateInputSchema } from './TransactionCategoryAvgOrderByAggregateInputSchema';
import { TransactionCategoryMaxOrderByAggregateInputSchema } from './TransactionCategoryMaxOrderByAggregateInputSchema';
import { TransactionCategoryMinOrderByAggregateInputSchema } from './TransactionCategoryMinOrderByAggregateInputSchema';
import { TransactionCategorySumOrderByAggregateInputSchema } from './TransactionCategorySumOrderByAggregateInputSchema';

export const TransactionCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.TransactionCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  icon: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  parentId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  path: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  isSystem: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  budgetLimit: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  warningThreshold: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  trackingEnabled: z.lazy(() => SortOrderSchema).optional(),
  vatRate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  taxDeductible: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TransactionCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TransactionCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TransactionCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TransactionCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TransactionCategorySumOrderByAggregateInputSchema).optional()
}).strict();

export default TransactionCategoryOrderByWithAggregationInputSchema;
