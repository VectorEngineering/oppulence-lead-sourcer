import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const LinkTagUncheckedCreateInputSchema: z.ZodType<Prisma.LinkTagUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  linkId: z.string(),
  tagId: z.string()
}).strict();

export default LinkTagUncheckedCreateInputSchema;
