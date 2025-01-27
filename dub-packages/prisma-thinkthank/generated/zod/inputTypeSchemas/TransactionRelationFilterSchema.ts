import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema';

export const TransactionRelationFilterSchema: z.ZodType<Prisma.TransactionRelationFilter> = z.object({
  is: z.lazy(() => TransactionWhereInputSchema).optional(),
  isNot: z.lazy(() => TransactionWhereInputSchema).optional()
}).strict();

export default TransactionRelationFilterSchema;
