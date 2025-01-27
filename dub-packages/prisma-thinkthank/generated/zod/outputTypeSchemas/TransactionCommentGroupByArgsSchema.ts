import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCommentWhereInputSchema } from '../inputTypeSchemas/TransactionCommentWhereInputSchema'
import { TransactionCommentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TransactionCommentOrderByWithAggregationInputSchema'
import { TransactionCommentScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionCommentScalarFieldEnumSchema'
import { TransactionCommentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TransactionCommentScalarWhereWithAggregatesInputSchema'

export const TransactionCommentGroupByArgsSchema: z.ZodType<Prisma.TransactionCommentGroupByArgs> = z.object({
  where: TransactionCommentWhereInputSchema.optional(),
  orderBy: z.union([ TransactionCommentOrderByWithAggregationInputSchema.array(),TransactionCommentOrderByWithAggregationInputSchema ]).optional(),
  by: TransactionCommentScalarFieldEnumSchema.array(),
  having: TransactionCommentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionCommentGroupByArgsSchema;
