import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TransactionRelationFilterSchema } from './TransactionRelationFilterSchema';
import { TransactionWhereInputSchema } from './TransactionWhereInputSchema';

export const TransactionReconciliationMatchWhereInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionReconciliationMatchWhereInputSchema),z.lazy(() => TransactionReconciliationMatchWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionReconciliationMatchWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionReconciliationMatchWhereInputSchema),z.lazy(() => TransactionReconciliationMatchWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transactionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  matchedTransactionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  confidence: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  matchType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  transaction: z.union([ z.lazy(() => TransactionRelationFilterSchema),z.lazy(() => TransactionWhereInputSchema) ]).optional(),
}).strict();

export default TransactionReconciliationMatchWhereInputSchema;
