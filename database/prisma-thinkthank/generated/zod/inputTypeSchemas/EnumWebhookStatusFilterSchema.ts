import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookStatusSchema } from './WebhookStatusSchema';
import { NestedEnumWebhookStatusFilterSchema } from './NestedEnumWebhookStatusFilterSchema';

export const EnumWebhookStatusFilterSchema: z.ZodType<Prisma.EnumWebhookStatusFilter> = z.object({
  equals: z.lazy(() => WebhookStatusSchema).optional(),
  in: z.lazy(() => WebhookStatusSchema).array().optional(),
  notIn: z.lazy(() => WebhookStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => WebhookStatusSchema),z.lazy(() => NestedEnumWebhookStatusFilterSchema) ]).optional(),
}).strict();

export default EnumWebhookStatusFilterSchema;
