import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { DomainCountOrderByAggregateInputSchema } from './DomainCountOrderByAggregateInputSchema';
import { DomainMaxOrderByAggregateInputSchema } from './DomainMaxOrderByAggregateInputSchema';
import { DomainMinOrderByAggregateInputSchema } from './DomainMinOrderByAggregateInputSchema';

export const DomainOrderByWithAggregationInputSchema: z.ZodType<Prisma.DomainOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  verified: z.lazy(() => SortOrderSchema).optional(),
  placeholder: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expiredUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notFoundUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  primary: z.lazy(() => SortOrderSchema).optional(),
  archived: z.lazy(() => SortOrderSchema).optional(),
  lastChecked: z.lazy(() => SortOrderSchema).optional(),
  logo: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DomainCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DomainMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DomainMinOrderByAggregateInputSchema).optional()
}).strict();

export default DomainOrderByWithAggregationInputSchema;
