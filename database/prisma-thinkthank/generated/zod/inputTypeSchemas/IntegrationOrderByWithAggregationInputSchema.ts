import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { IntegrationCountOrderByAggregateInputSchema } from './IntegrationCountOrderByAggregateInputSchema';
import { IntegrationMaxOrderByAggregateInputSchema } from './IntegrationMaxOrderByAggregateInputSchema';
import { IntegrationMinOrderByAggregateInputSchema } from './IntegrationMinOrderByAggregateInputSchema';

export const IntegrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.IntegrationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  readme: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  developer: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  screenshots: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  verified: z.lazy(() => SortOrderSchema).optional(),
  installUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => IntegrationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => IntegrationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => IntegrationMinOrderByAggregateInputSchema).optional()
}).strict();

export default IntegrationOrderByWithAggregationInputSchema;
