import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const jackson_ttlSelectSchema: z.ZodType<Prisma.jackson_ttlSelect> = z.object({
  key: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
}).strict()

export default jackson_ttlSelectSchema;
