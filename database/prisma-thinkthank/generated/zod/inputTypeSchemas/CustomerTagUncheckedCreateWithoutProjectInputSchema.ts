import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerTagUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.CustomerTagUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  customerId: z.string(),
  tagId: z.string()
}).strict();

export default CustomerTagUncheckedCreateWithoutProjectInputSchema;
