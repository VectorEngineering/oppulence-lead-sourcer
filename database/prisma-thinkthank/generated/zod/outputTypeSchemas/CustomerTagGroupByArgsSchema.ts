import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerTagWhereInputSchema } from '../inputTypeSchemas/CustomerTagWhereInputSchema'
import { CustomerTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CustomerTagOrderByWithAggregationInputSchema'
import { CustomerTagScalarFieldEnumSchema } from '../inputTypeSchemas/CustomerTagScalarFieldEnumSchema'
import { CustomerTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CustomerTagScalarWhereWithAggregatesInputSchema'

export const CustomerTagGroupByArgsSchema: z.ZodType<Prisma.CustomerTagGroupByArgs> = z.object({
  where: CustomerTagWhereInputSchema.optional(),
  orderBy: z.union([ CustomerTagOrderByWithAggregationInputSchema.array(),CustomerTagOrderByWithAggregationInputSchema ]).optional(),
  by: CustomerTagScalarFieldEnumSchema.array(),
  having: CustomerTagScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CustomerTagGroupByArgsSchema;
