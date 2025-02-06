import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TransactionCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.TransactionCategoryCountOutputTypeSelect> = z.object({
  transactions: z.boolean().optional(),
  children: z.boolean().optional(),
}).strict();

export default TransactionCategoryCountOutputTypeSelectSchema;
