import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerTagCreateManyTagInputSchema: z.ZodType<Prisma.CustomerTagCreateManyTagInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  customerId: z.string(),
  projectId: z.string()
}).strict();

export default CustomerTagCreateManyTagInputSchema;
