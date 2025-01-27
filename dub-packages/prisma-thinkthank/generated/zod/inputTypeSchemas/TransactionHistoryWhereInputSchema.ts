import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { TransactionRelationFilterSchema } from './TransactionRelationFilterSchema';
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema';

export const TransactionHistoryWhereInputSchema: z.ZodType<Prisma.TransactionHistoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionHistoryWhereInputSchema),z.lazy(() => TransactionHistoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionHistoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionHistoryWhereInputSchema),z.lazy(() => TransactionHistoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transactionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  changes: z.lazy(() => JsonNullableFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  transaction: z.union([ z.lazy(() => TransactionRelationFilterSchema),z.lazy(() => TransactionWhereInputSchema) ]).optional(),
}).strict();

export default TransactionHistoryWhereInputSchema;
