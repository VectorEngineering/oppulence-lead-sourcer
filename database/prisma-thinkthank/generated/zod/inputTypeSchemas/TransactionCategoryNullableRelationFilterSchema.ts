import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionCategoryWhereInputSchema } from './TransactionCategoryWhereInputSchema';

export const TransactionCategoryNullableRelationFilterSchema: z.ZodType<Prisma.TransactionCategoryNullableRelationFilter> = z.object({
  is: z.lazy(() => TransactionCategoryWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TransactionCategoryWhereInputSchema).optional().nullable()
}).strict();

export default TransactionCategoryNullableRelationFilterSchema;
