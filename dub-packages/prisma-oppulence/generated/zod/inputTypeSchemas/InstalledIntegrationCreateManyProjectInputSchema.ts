import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const InstalledIntegrationCreateManyProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateManyProjectInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  integrationId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
}).strict();

export default InstalledIntegrationCreateManyProjectInputSchema;
