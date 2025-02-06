import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EndpointMinOrderByAggregateInputSchema: z.ZodType<Prisma.EndpointMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  webhookEnabled: z.lazy(() => SortOrderSchema).optional(),
  emailNotify: z.lazy(() => SortOrderSchema).optional(),
  webhook: z.lazy(() => SortOrderSchema).optional(),
  formEnabled: z.lazy(() => SortOrderSchema).optional(),
  successUrl: z.lazy(() => SortOrderSchema).optional(),
  failUrl: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EndpointMinOrderByAggregateInputSchema;
