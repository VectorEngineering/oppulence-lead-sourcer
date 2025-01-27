import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumWebhookReceiverWithAggregatesFilterSchema } from './EnumWebhookReceiverWithAggregatesFilterSchema';
import { WebhookReceiverSchema } from './WebhookReceiverSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { EnumWebhookStatusWithAggregatesFilterSchema } from './EnumWebhookStatusWithAggregatesFilterSchema';
import { WebhookStatusSchema } from './WebhookStatusSchema';

export const WebhookScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WebhookScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookScalarWhereWithAggregatesInputSchema),z.lazy(() => WebhookScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookScalarWhereWithAggregatesInputSchema),z.lazy(() => WebhookScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  installationId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  receiver: z.union([ z.lazy(() => EnumWebhookReceiverWithAggregatesFilterSchema),z.lazy(() => WebhookReceiverSchema) ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  secret: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  triggers: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  consecutiveFailures: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  lastFailedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  disabledAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  maxRetries: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  lastErrorMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  timeout: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumWebhookStatusWithAggregatesFilterSchema),z.lazy(() => WebhookStatusSchema) ]).optional(),
  verificationToken: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ipWhitelist: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rateLimitPerMinute: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default WebhookScalarWhereWithAggregatesInputSchema;
