import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionReconciliationMatchIncludeSchema } from '../inputTypeSchemas/TransactionReconciliationMatchIncludeSchema'
import { TransactionReconciliationMatchWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereUniqueInputSchema'
import { TransactionReconciliationMatchCreateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchCreateInputSchema'
import { TransactionReconciliationMatchUncheckedCreateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUncheckedCreateInputSchema'
import { TransactionReconciliationMatchUpdateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUpdateInputSchema'
import { TransactionReconciliationMatchUncheckedUpdateInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchUncheckedUpdateInputSchema'
import { TransactionArgsSchema } from "../outputTypeSchemas/TransactionArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const TransactionReconciliationMatchUpsertArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchUpsertArgs> = z.object({
  select: TransactionReconciliationMatchSelectSchema.optional(),
  include: TransactionReconciliationMatchIncludeSchema.optional(),
  where: TransactionReconciliationMatchWhereUniqueInputSchema,
  create: z.union([ TransactionReconciliationMatchCreateInputSchema,TransactionReconciliationMatchUncheckedCreateInputSchema ]),
  update: z.union([ TransactionReconciliationMatchUpdateInputSchema,TransactionReconciliationMatchUncheckedUpdateInputSchema ]),
}).strict() ;

export default TransactionReconciliationMatchUpsertArgsSchema;
