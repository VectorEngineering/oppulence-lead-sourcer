import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const jackson_indexCreateInputSchema: z.ZodType<Prisma.jackson_indexCreateInput> = z.object({
  key: z.string(),
  storeKey: z.string()
}).strict();

export default jackson_indexCreateInputSchema;
