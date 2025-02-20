import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_storeWhereInputSchema } from '../inputTypeSchemas/jackson_storeWhereInputSchema'
import { jackson_storeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/jackson_storeOrderByWithAggregationInputSchema'
import { Jackson_storeScalarFieldEnumSchema } from '../inputTypeSchemas/Jackson_storeScalarFieldEnumSchema'
import { jackson_storeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/jackson_storeScalarWhereWithAggregatesInputSchema'

export const jackson_storeGroupByArgsSchema: z.ZodType<Prisma.jackson_storeGroupByArgs> = z.object({
  where: jackson_storeWhereInputSchema.optional(),
  orderBy: z.union([ jackson_storeOrderByWithAggregationInputSchema.array(),jackson_storeOrderByWithAggregationInputSchema ]).optional(),
  by: Jackson_storeScalarFieldEnumSchema.array(),
  having: jackson_storeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default jackson_storeGroupByArgsSchema;
