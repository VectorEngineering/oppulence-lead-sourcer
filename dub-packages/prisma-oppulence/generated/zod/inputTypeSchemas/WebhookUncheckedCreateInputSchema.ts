import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookReceiverSchema } from './WebhookReceiverSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookStatusSchema } from './WebhookStatusSchema';
import { LinkWebhookUncheckedCreateNestedManyWithoutWebhookInputSchema } from './LinkWebhookUncheckedCreateNestedManyWithoutWebhookInputSchema';
import { WebhookLogUncheckedCreateNestedManyWithoutWebhookInputSchema } from './WebhookLogUncheckedCreateNestedManyWithoutWebhookInputSchema';

export const WebhookUncheckedCreateInputSchema: z.ZodType<Prisma.WebhookUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  projectId: z.string(),
  installationId: z.string().optional().nullable(),
  receiver: z.lazy(() => WebhookReceiverSchema).optional(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  triggers: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  consecutiveFailures: z.number().int().optional(),
  lastFailedAt: z.coerce.date().optional().nullable(),
  disabledAt: z.coerce.date().optional().nullable(),
  maxRetries: z.number().int().optional(),
  lastErrorMessage: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  timeout: z.number().int().optional().nullable(),
  status: z.lazy(() => WebhookStatusSchema).optional(),
  verificationToken: z.string().optional().nullable(),
  ipWhitelist: z.string().optional().nullable(),
  rateLimitPerMinute: z.number().int().optional(),
  links: z.lazy(() => LinkWebhookUncheckedCreateNestedManyWithoutWebhookInputSchema).optional(),
  logs: z.lazy(() => WebhookLogUncheckedCreateNestedManyWithoutWebhookInputSchema).optional()
}).strict();

export default WebhookUncheckedCreateInputSchema;
