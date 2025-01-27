import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerTagUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.CustomerTagUncheckedCreateWithoutCustomerInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  tagId: z.string(),
  projectId: z.string()
}).strict();

export default CustomerTagUncheckedCreateWithoutCustomerInputSchema;
