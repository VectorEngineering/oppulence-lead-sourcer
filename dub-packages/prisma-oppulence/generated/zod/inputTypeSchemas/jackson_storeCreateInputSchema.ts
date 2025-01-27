import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const jackson_storeCreateInputSchema: z.ZodType<Prisma.jackson_storeCreateInput> = z.object({
  key: z.string(),
  value: z.string(),
  iv: z.string().optional().nullable(),
  tag: z.string().optional().nullable(),
  namespace: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  modifiedAt: z.coerce.date().optional().nullable()
}).strict();

export default jackson_storeCreateInputSchema;
