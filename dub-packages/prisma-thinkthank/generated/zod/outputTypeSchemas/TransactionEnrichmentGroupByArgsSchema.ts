import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TransactionEnrichmentWhereInputSchema } from '../inputTypeSchemas/TransactionEnrichmentWhereInputSchema'
import { TransactionEnrichmentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TransactionEnrichmentOrderByWithAggregationInputSchema'
import { TransactionEnrichmentScalarFieldEnumSchema } from '../inputTypeSchemas/TransactionEnrichmentScalarFieldEnumSchema'
import { TransactionEnrichmentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TransactionEnrichmentScalarWhereWithAggregatesInputSchema'

export const TransactionEnrichmentGroupByArgsSchema: z.ZodType<Prisma.TransactionEnrichmentGroupByArgs> = z.object({
  where: TransactionEnrichmentWhereInputSchema.optional(),
  orderBy: z.union([ TransactionEnrichmentOrderByWithAggregationInputSchema.array(),TransactionEnrichmentOrderByWithAggregationInputSchema ]).optional(),
  by: TransactionEnrichmentScalarFieldEnumSchema.array(),
  having: TransactionEnrichmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TransactionEnrichmentGroupByArgsSchema;
