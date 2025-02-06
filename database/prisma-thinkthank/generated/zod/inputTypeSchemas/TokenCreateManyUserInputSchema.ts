import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TokenCreateManyUserInputSchema: z.ZodType<Prisma.TokenCreateManyUserInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  hashedKey: z.string(),
  partialKey: z.string(),
  expires: z.coerce.date().optional().nullable(),
  lastUsed: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TokenCreateManyUserInputSchema;
