import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CustomerTagCountOrderByAggregateInputSchema } from './CustomerTagCountOrderByAggregateInputSchema';
import { CustomerTagMaxOrderByAggregateInputSchema } from './CustomerTagMaxOrderByAggregateInputSchema';
import { CustomerTagMinOrderByAggregateInputSchema } from './CustomerTagMinOrderByAggregateInputSchema';

export const CustomerTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.CustomerTagOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CustomerTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CustomerTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CustomerTagMinOrderByAggregateInputSchema).optional()
}).strict();

export default CustomerTagOrderByWithAggregationInputSchema;
