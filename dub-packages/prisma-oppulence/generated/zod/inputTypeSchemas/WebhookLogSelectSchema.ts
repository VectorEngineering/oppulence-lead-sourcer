import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookArgsSchema } from "../outputTypeSchemas/WebhookArgsSchema"

export const WebhookLogSelectSchema: z.ZodType<Prisma.WebhookLogSelect> = z.object({
  id: z.boolean().optional(),
  webhookId: z.boolean().optional(),
  requestBody: z.boolean().optional(),
  responseBody: z.boolean().optional(),
  statusCode: z.boolean().optional(),
  duration: z.boolean().optional(),
  success: z.boolean().optional(),
  errorMessage: z.boolean().optional(),
  timestamp: z.boolean().optional(),
  webhook: z.union([z.boolean(),z.lazy(() => WebhookArgsSchema)]).optional(),
}).strict()

export default WebhookLogSelectSchema;
