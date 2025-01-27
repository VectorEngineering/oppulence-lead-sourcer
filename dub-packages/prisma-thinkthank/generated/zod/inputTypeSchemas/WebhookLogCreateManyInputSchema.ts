import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const WebhookLogCreateManyInputSchema: z.ZodType<Prisma.WebhookLogCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  webhookId: z.string(),
  requestBody: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  responseBody: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  statusCode: z.number().int().optional().nullable(),
  duration: z.number().int(),
  success: z.boolean(),
  errorMessage: z.string().optional().nullable(),
  timestamp: z.coerce.date().optional()
}).strict();

export default WebhookLogCreateManyInputSchema;
