import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EndpointCountOrderByAggregateInputSchema } from './EndpointCountOrderByAggregateInputSchema';
import { EndpointMaxOrderByAggregateInputSchema } from './EndpointMaxOrderByAggregateInputSchema';
import { EndpointMinOrderByAggregateInputSchema } from './EndpointMinOrderByAggregateInputSchema';

export const EndpointOrderByWithAggregationInputSchema: z.ZodType<Prisma.EndpointOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  schema: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  webhookEnabled: z.lazy(() => SortOrderSchema).optional(),
  emailNotify: z.lazy(() => SortOrderSchema).optional(),
  webhook: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  formEnabled: z.lazy(() => SortOrderSchema).optional(),
  successUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  failUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EndpointCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EndpointMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EndpointMinOrderByAggregateInputSchema).optional()
}).strict();

export default EndpointOrderByWithAggregationInputSchema;
