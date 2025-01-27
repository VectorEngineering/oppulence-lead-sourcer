import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { jackson_storeCountOrderByAggregateInputSchema } from './jackson_storeCountOrderByAggregateInputSchema';
import { jackson_storeMaxOrderByAggregateInputSchema } from './jackson_storeMaxOrderByAggregateInputSchema';
import { jackson_storeMinOrderByAggregateInputSchema } from './jackson_storeMinOrderByAggregateInputSchema';

export const jackson_storeOrderByWithAggregationInputSchema: z.ZodType<Prisma.jackson_storeOrderByWithAggregationInput> = z.object({
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  iv: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tag: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  namespace: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  modifiedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => jackson_storeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => jackson_storeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => jackson_storeMinOrderByAggregateInputSchema).optional()
}).strict();

export default jackson_storeOrderByWithAggregationInputSchema;
