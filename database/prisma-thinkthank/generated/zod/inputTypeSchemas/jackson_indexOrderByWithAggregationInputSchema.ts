import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { jackson_indexCountOrderByAggregateInputSchema } from './jackson_indexCountOrderByAggregateInputSchema';
import { jackson_indexAvgOrderByAggregateInputSchema } from './jackson_indexAvgOrderByAggregateInputSchema';
import { jackson_indexMaxOrderByAggregateInputSchema } from './jackson_indexMaxOrderByAggregateInputSchema';
import { jackson_indexMinOrderByAggregateInputSchema } from './jackson_indexMinOrderByAggregateInputSchema';
import { jackson_indexSumOrderByAggregateInputSchema } from './jackson_indexSumOrderByAggregateInputSchema';

export const jackson_indexOrderByWithAggregationInputSchema: z.ZodType<Prisma.jackson_indexOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  storeKey: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => jackson_indexCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => jackson_indexAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => jackson_indexMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => jackson_indexMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => jackson_indexSumOrderByAggregateInputSchema).optional()
}).strict();

export default jackson_indexOrderByWithAggregationInputSchema;
