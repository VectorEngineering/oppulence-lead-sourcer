import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookLogWhereInputSchema } from './WebhookLogWhereInputSchema';

export const WebhookLogListRelationFilterSchema: z.ZodType<Prisma.WebhookLogListRelationFilter> = z.object({
  every: z.lazy(() => WebhookLogWhereInputSchema).optional(),
  some: z.lazy(() => WebhookLogWhereInputSchema).optional(),
  none: z.lazy(() => WebhookLogWhereInputSchema).optional()
}).strict();

export default WebhookLogListRelationFilterSchema;
