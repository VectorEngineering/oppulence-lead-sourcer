import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SentEmailUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.SentEmailUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();

export default SentEmailUncheckedCreateWithoutProjectInputSchema;
