import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const jackson_storeSelectSchema: z.ZodType<Prisma.jackson_storeSelect> = z.object({
  key: z.boolean().optional(),
  value: z.boolean().optional(),
  iv: z.boolean().optional(),
  tag: z.boolean().optional(),
  namespace: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  modifiedAt: z.boolean().optional(),
}).strict()

export default jackson_storeSelectSchema;
