import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CustomerTagCreateManyInputSchema: z.ZodType<Prisma.CustomerTagCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  customerId: z.string(),
  tagId: z.string(),
  projectId: z.string()
}).strict();

export default CustomerTagCreateManyInputSchema;
