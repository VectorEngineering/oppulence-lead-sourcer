import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookReceiverSchema } from './WebhookReceiverSchema';

export const NestedEnumWebhookReceiverFilterSchema: z.ZodType<Prisma.NestedEnumWebhookReceiverFilter> = z.object({
  equals: z.lazy(() => WebhookReceiverSchema).optional(),
  in: z.lazy(() => WebhookReceiverSchema).array().optional(),
  notIn: z.lazy(() => WebhookReceiverSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookReceiverSchema),z.lazy(() => NestedEnumWebhookReceiverFilterSchema) ]).optional(),
}).strict();

export default NestedEnumWebhookReceiverFilterSchema;
