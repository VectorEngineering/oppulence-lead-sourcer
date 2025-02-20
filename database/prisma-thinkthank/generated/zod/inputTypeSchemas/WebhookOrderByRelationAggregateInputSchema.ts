import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const WebhookOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WebhookOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default WebhookOrderByRelationAggregateInputSchema;
