import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const IntegrationCreateManyUserInputSchema: z.ZodType<Prisma.IntegrationCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  projectId: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  readme: z.string().optional().nullable(),
  developer: z.string(),
  website: z.string(),
  logo: z.string().optional().nullable(),
  screenshots: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  verified: z.boolean().optional(),
  installUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default IntegrationCreateManyUserInputSchema;
