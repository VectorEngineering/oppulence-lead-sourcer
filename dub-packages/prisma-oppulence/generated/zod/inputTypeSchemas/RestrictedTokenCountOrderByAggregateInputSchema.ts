import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RestrictedTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.RestrictedTokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  hashedKey: z.lazy(() => SortOrderSchema).optional(),
  partialKey: z.lazy(() => SortOrderSchema).optional(),
  scopes: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  lastUsed: z.lazy(() => SortOrderSchema).optional(),
  rateLimit: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  installationId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RestrictedTokenCountOrderByAggregateInputSchema;
