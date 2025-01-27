import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookLogCountOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookLogCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  webhookId: z.lazy(() => SortOrderSchema).optional(),
  requestBody: z.lazy(() => SortOrderSchema).optional(),
  responseBody: z.lazy(() => SortOrderSchema).optional(),
  statusCode: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  success: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookLogCountOrderByAggregateInputSchema;
