import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const jackson_ttlUncheckedCreateInputSchema: z.ZodType<Prisma.jackson_ttlUncheckedCreateInput> = z.object({
  key: z.string(),
  expiresAt: z.bigint()
}).strict();

export default jackson_ttlUncheckedCreateInputSchema;
