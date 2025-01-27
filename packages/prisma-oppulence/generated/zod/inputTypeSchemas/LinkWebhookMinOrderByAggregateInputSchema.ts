import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LinkWebhookMinOrderByAggregateInputSchema: z.ZodType<Prisma.LinkWebhookMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  webhookId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LinkWebhookMinOrderByAggregateInputSchema;
