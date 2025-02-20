import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCommentWhereInputSchema } from '../inputTypeSchemas/TransactionCommentWhereInputSchema'
import { TransactionCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionCommentOrderByWithRelationInputSchema'
import { TransactionCommentWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionCommentWhereUniqueInputSchema'

export const TransactionCommentAggregateArgsSchema: z.ZodType<Prisma.TransactionCommentAggregateArgs> = z.object({
  where: TransactionCommentWhereInputSchema.optional(),
  orderBy: z.union([ TransactionCommentOrderByWithRelationInputSchema.array(),TransactionCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionCommentAggregateArgsSchema;
