import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DealHistoryCountOrderByAggregateInputSchema } from './DealHistoryCountOrderByAggregateInputSchema';
import { DealHistoryMaxOrderByAggregateInputSchema } from './DealHistoryMaxOrderByAggregateInputSchema';
import { DealHistoryMinOrderByAggregateInputSchema } from './DealHistoryMinOrderByAggregateInputSchema';

export const DealHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.DealHistoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dealId: z.lazy(() => SortOrderSchema).optional(),
  field: z.lazy(() => SortOrderSchema).optional(),
  oldValue: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  newValue: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DealHistoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DealHistoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DealHistoryMinOrderByAggregateInputSchema).optional()
}).strict();

export default DealHistoryOrderByWithAggregationInputSchema;
