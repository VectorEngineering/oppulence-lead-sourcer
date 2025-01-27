import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const DomainMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DomainMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  verified: z.lazy(() => SortOrderSchema).optional(),
  placeholder: z.lazy(() => SortOrderSchema).optional(),
  expiredUrl: z.lazy(() => SortOrderSchema).optional(),
  notFoundUrl: z.lazy(() => SortOrderSchema).optional(),
  primary: z.lazy(() => SortOrderSchema).optional(),
  archived: z.lazy(() => SortOrderSchema).optional(),
  lastChecked: z.lazy(() => SortOrderSchema).optional(),
  logo: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default DomainMaxOrderByAggregateInputSchema;
