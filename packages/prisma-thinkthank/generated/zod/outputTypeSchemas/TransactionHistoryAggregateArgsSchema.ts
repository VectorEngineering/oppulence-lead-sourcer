import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionHistoryWhereInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereInputSchema'
import { TransactionHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionHistoryOrderByWithRelationInputSchema'
import { TransactionHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionHistoryWhereUniqueInputSchema'

export const TransactionHistoryAggregateArgsSchema: z.ZodType<Prisma.TransactionHistoryAggregateArgs> = z.object({
  where: TransactionHistoryWhereInputSchema.optional(),
  orderBy: z.union([ TransactionHistoryOrderByWithRelationInputSchema.array(),TransactionHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionHistoryAggregateArgsSchema;
