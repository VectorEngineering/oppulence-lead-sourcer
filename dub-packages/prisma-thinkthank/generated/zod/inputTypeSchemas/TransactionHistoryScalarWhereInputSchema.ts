import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const TransactionHistoryScalarWhereInputSchema: z.ZodType<Prisma.TransactionHistoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TransactionHistoryScalarWhereInputSchema),z.lazy(() => TransactionHistoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TransactionHistoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TransactionHistoryScalarWhereInputSchema),z.lazy(() => TransactionHistoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  transactionId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  changes: z.lazy(() => JsonNullableFilterSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default TransactionHistoryScalarWhereInputSchema;
