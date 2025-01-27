import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SentEmailUncheckedCreateInputSchema: z.ZodType<Prisma.SentEmailUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  projectId: z.string().optional().nullable()
}).strict();

export default SentEmailUncheckedCreateInputSchema;
