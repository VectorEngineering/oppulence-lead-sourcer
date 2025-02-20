import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCategorySelectSchema } from '../inputTypeSchemas/TransactionCategorySelectSchema';
import { TransactionCategoryIncludeSchema } from '../inputTypeSchemas/TransactionCategoryIncludeSchema';

export const TransactionCategoryArgsSchema: z.ZodType<Prisma.TransactionCategoryDefaultArgs> = z.object({
  select: z.lazy(() => TransactionCategorySelectSchema).optional(),
  include: z.lazy(() => TransactionCategoryIncludeSchema).optional(),
}).strict();

export default TransactionCategoryArgsSchema;
