import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionCategoryWhereInputSchema } from '../inputTypeSchemas/TransactionCategoryWhereInputSchema'
import { TransactionCategoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/TransactionCategoryOrderByWithRelationInputSchema'
import { TransactionCategoryWhereUniqueInputSchema } from '../inputTypeSchemas/TransactionCategoryWhereUniqueInputSchema'

export const TransactionCategoryAggregateArgsSchema: z.ZodType<Prisma.TransactionCategoryAggregateArgs> = z.object({
  where: TransactionCategoryWhereInputSchema.optional(),
  orderBy: z.union([ TransactionCategoryOrderByWithRelationInputSchema.array(),TransactionCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: TransactionCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionCategoryAggregateArgsSchema;
