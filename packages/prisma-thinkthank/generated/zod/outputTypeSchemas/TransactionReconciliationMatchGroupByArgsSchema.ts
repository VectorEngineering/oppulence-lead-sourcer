import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionReconciliationMatchWhereInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchWhereInputSchema'
import { TransactionReconciliationMatchOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchOrderByWithAggregationInputSchema'
import { TransactionReconciliationMatchScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionReconciliationMatchScalarFieldEnumSchema'
import { TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema'

export const TransactionReconciliationMatchGroupByArgsSchema: z.ZodType<Prisma.TransactionReconciliationMatchGroupByArgs> = z.object({
  where: TransactionReconciliationMatchWhereInputSchema.optional(),
  orderBy: z.union([ TransactionReconciliationMatchOrderByWithAggregationInputSchema.array(),TransactionReconciliationMatchOrderByWithAggregationInputSchema ]).optional(),
  by: TransactionReconciliationMatchScalarFieldEnumSchema.array(),
  having: TransactionReconciliationMatchScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionReconciliationMatchGroupByArgsSchema;
