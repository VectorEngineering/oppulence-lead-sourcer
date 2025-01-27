import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookReceiverSchema } from './WebhookReceiverSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookStatusSchema } from './WebhookStatusSchema';

export const WebhookCreateManyProjectInputSchema: z.ZodType<Prisma.WebhookCreateManyProjectInput> = z.object({
  id: z.string().cuid().optional(),
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
  rateLimitPerMinute: z.number().int().optional()
}).strict();

export default WebhookCreateManyProjectInputSchema;
