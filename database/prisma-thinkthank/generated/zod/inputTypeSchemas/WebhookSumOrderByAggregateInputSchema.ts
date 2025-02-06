import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookSumOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookSumOrderByAggregateInput> = z.object({
  consecutiveFailures: z.lazy(() => SortOrderSchema).optional(),
  maxRetries: z.lazy(() => SortOrderSchema).optional(),
  timeout: z.lazy(() => SortOrderSchema).optional(),
  rateLimitPerMinute: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookSumOrderByAggregateInputSchema;
