import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionHistoryIncludeSchema } from '../inputTypeSchemas/TransactionHistoryIncludeSchema'
import { TransactionHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereUniqueInputSchema'
import { TransactionHistoryCreateInputSchema } from '../inputTypeSchemas/TransactionHistoryCreateInputSchema'
import { TransactionHistoryUncheckedCreateInputSchema } from '../inputTypeSchemas/TransactionHistoryUncheckedCreateInputSchema'
import { TransactionHistoryUpdateInputSchema } from '../inputTypeSchemas/TransactionHistoryUpdateInputSchema'
import { TransactionHistoryUncheckedUpdateInputSchema } from '../inputTypeSchemas/TransactionHistoryUncheckedUpdateInputSchema'
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

export const TransactionHistoryUpsertArgsSchema: z.ZodType<Prisma.TransactionHistoryUpsertArgs> = z.object({
  select: TransactionHistorySelectSchema.optional(),
  include: TransactionHistoryIncludeSchema.optional(),
  where: TransactionHistoryWhereUniqueInputSchema,
  create: z.union([ TransactionHistoryCreateInputSchema,TransactionHistoryUncheckedCreateInputSchema ]),
  update: z.union([ TransactionHistoryUpdateInputSchema,TransactionHistoryUncheckedUpdateInputSchema ]),
}).strict() ;

export default TransactionHistoryUpsertArgsSchema;
