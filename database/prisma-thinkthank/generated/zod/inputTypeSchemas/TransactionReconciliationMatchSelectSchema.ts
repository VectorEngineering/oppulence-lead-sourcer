import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionArgsSchema } from "../outputTypeSchemas/TransactionArgsSchema"

export const TransactionReconciliationMatchSelectSchema: z.ZodType<Prisma.TransactionReconciliationMatchSelect> = z.object({
  id: z.boolean().optional(),
  transactionId: z.boolean().optional(),
  matchedTransactionId: z.boolean().optional(),
  confidence: z.boolean().optional(),
  matchType: z.boolean().optional(),
  status: z.boolean().optional(),
  notes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  transaction: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
}).strict()

export default TransactionReconciliationMatchSelectSchema;
