import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionHistoryIncludeSchema } from '../inputTypeSchemas/TransactionHistoryIncludeSchema'
import { TransactionHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereUniqueInputSchema'
import { TransactionArgsSchema } from "../outputTypeSchemas/TransactionArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TransactionHistorySelectSchema: z.ZodType<Prisma.TransactionHistorySelect> = z.object({
  id: z.boolean().optional(),
  transactionId: z.boolean().optional(),
  action: z.boolean().optional(),
  description: z.boolean().optional(),
  changes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  transaction: z.union([z.boolean(),z.lazy(() => TransactionArgsSchema)]).optional(),
}).strict()

export const TransactionHistoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TransactionHistoryFindUniqueOrThrowArgs> = z.object({
  select: TransactionHistorySelectSchema.optional(),
  include: TransactionHistoryIncludeSchema.optional(),
  where: TransactionHistoryWhereUniqueInputSchema,
}).strict() ;

export default TransactionHistoryFindUniqueOrThrowArgsSchema;
