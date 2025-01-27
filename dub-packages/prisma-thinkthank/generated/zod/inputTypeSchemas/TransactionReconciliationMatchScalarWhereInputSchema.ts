import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { FloatFilterSchema } from './FloatFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TransactionReconciliationMatchScalarWhereInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema),z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema),z.lazy(() => TransactionReconciliationMatchScalarWhereInputSchema).array() ]).optional(),
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
}).strict();

export default TransactionReconciliationMatchScalarWhereInputSchema;
