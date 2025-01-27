import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const TransactionReconciliationMatchCreateWithoutTransactionInputSchema: z.ZodType<Prisma.TransactionReconciliationMatchCreateWithoutTransactionInput> = z.object({
  id: z.string().cuid().optional(),
  matchedTransactionId: z.string(),
  confidence: z.number(),
  matchType: z.string(),
  status: z.string(),
  notes: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TransactionReconciliationMatchCreateWithoutTransactionInputSchema;
