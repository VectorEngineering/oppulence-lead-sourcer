import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionArgsSchema } from "../outputTypeSchemas/TransactionArgsSchema"

export const TransactionHistoryIncludeSchema: z.ZodType<Prisma.TransactionHistoryInclude> = z.object({
  transaction: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
}).strict()

export default TransactionHistoryIncludeSchema;
