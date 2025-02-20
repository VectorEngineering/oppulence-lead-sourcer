import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema';

export const TransactionCategoryListRelationFilterSchema: z.ZodType<Prisma.TransactionCategoryListRelationFilter> = z.object({
  every: z.lazy(() => TransactionCategoryWhereInputSchema).optional(),
  some: z.lazy(() => TransactionCategoryWhereInputSchema).optional(),
  none: z.lazy(() => TransactionCategoryWhereInputSchema).optional()
}).strict();

export default TransactionCategoryListRelationFilterSchema;
