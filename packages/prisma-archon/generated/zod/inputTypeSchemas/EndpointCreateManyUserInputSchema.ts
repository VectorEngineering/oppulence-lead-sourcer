import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const EndpointCreateManyUserInputSchema: z.ZodType<Prisma.EndpointCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  schema: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  enabled: z.boolean().optional(),
  webhookEnabled: z.boolean().optional(),
  emailNotify: z.boolean().optional(),
  webhook: z.string().optional().nullable(),
  formEnabled: z.boolean().optional(),
  successUrl: z.string().optional().nullable(),
  failUrl: z.string().optional().nullable(),
  token: z.string().optional().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date()
}).strict();

export default EndpointCreateManyUserInputSchema;
