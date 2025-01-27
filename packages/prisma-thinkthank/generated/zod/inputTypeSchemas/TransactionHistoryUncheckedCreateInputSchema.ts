import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TransactionHistoryUncheckedCreateInputSchema: z.ZodType<Prisma.TransactionHistoryUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  transactionId: z.string(),
  action: z.string(),
  description: z.string(),
  changes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  createdBy: z.string().optional().nullable()
}).strict();

export default TransactionHistoryUncheckedCreateInputSchema;
