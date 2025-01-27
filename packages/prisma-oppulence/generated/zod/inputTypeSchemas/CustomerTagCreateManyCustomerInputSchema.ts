import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerTagCreateManyCustomerInputSchema: z.ZodType<Prisma.CustomerTagCreateManyCustomerInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  tagId: z.string(),
  projectId: z.string()
}).strict();

export default CustomerTagCreateManyCustomerInputSchema;
