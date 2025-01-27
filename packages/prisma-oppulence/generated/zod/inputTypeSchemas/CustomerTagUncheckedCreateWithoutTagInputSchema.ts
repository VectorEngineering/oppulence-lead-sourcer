import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerTagUncheckedCreateWithoutTagInputSchema: z.ZodType<Prisma.CustomerTagUncheckedCreateWithoutTagInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  customerId: z.string(),
  projectId: z.string()
}).strict();

export default CustomerTagUncheckedCreateWithoutTagInputSchema;
