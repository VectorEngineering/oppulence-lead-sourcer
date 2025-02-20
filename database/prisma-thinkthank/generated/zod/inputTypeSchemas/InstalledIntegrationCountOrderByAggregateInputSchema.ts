import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InstalledIntegrationCountOrderByAggregateInputSchema: z.ZodType<Prisma.InstalledIntegrationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  integrationId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  credentials: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InstalledIntegrationCountOrderByAggregateInputSchema;
