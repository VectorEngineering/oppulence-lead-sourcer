import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookWhereInputSchema } from './WebhookWhereInputSchema';

export const WebhookListRelationFilterSchema: z.ZodType<Prisma.WebhookListRelationFilter> = z.object({
  every: z.lazy(() => WebhookWhereInputSchema).optional(),
  some: z.lazy(() => WebhookWhereInputSchema).optional(),
  none: z.lazy(() => WebhookWhereInputSchema).optional()
}).strict();

export default WebhookListRelationFilterSchema;
