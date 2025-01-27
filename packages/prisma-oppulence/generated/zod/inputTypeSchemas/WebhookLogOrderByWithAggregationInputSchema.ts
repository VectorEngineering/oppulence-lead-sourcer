import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WebhookLogCountOrderByAggregateInputSchema } from './WebhookLogCountOrderByAggregateInputSchema';
import { WebhookLogAvgOrderByAggregateInputSchema } from './WebhookLogAvgOrderByAggregateInputSchema';
import { WebhookLogMaxOrderByAggregateInputSchema } from './WebhookLogMaxOrderByAggregateInputSchema';
import { WebhookLogMinOrderByAggregateInputSchema } from './WebhookLogMinOrderByAggregateInputSchema';
import { WebhookLogSumOrderByAggregateInputSchema } from './WebhookLogSumOrderByAggregateInputSchema';

export const WebhookLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.WebhookLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  webhookId: z.lazy(() => SortOrderSchema).optional(),
  requestBody: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  responseBody: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  statusCode: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  success: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => WebhookLogCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => WebhookLogAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WebhookLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WebhookLogMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => WebhookLogSumOrderByAggregateInputSchema).optional()
}).strict();

export default WebhookLogOrderByWithAggregationInputSchema;
