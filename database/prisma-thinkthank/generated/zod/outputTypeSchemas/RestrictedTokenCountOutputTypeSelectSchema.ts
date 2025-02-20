import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RestrictedTokenCountOutputTypeSelectSchema: z.ZodType<Prisma.RestrictedTokenCountOutputTypeSelect> = z.object({
  refreshTokens: z.boolean().optional(),
}).strict();

export default RestrictedTokenCountOutputTypeSelectSchema;
