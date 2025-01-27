import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookLogAvgOrderByAggregateInputSchema: z.ZodType<Prisma.WebhookLogAvgOrderByAggregateInput> = z.object({
  statusCode: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookLogAvgOrderByAggregateInputSchema;
