import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  installationId: z.lazy(() => SortOrderSchema).optional(),
  receiver: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  secret: z.lazy(() => SortOrderSchema).optional(),
  consecutiveFailures: z.lazy(() => SortOrderSchema).optional(),
  lastFailedAt: z.lazy(() => SortOrderSchema).optional(),
  disabledAt: z.lazy(() => SortOrderSchema).optional(),
  maxRetries: z.lazy(() => SortOrderSchema).optional(),
  lastErrorMessage: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  timeout: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  verificationToken: z.lazy(() => SortOrderSchema).optional(),
  ipWhitelist: z.lazy(() => SortOrderSchema).optional(),
  rateLimitPerMinute: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookMaxOrderByAggregateInputSchema;
