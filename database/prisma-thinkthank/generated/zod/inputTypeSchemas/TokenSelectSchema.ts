import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  hashedKey: z.boolean().optional(),
  partialKey: z.boolean().optional(),
  expires: z.boolean().optional(),
  lastUsed: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default TokenSelectSchema;
